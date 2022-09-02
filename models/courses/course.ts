import { ICourse, CourseYear, RoomCount, ClassCount } from '../../interfaces';

export abstract class Course implements ICourse {
    name: string;
    duration: number;
    courseYears: CourseYear[];
    targetPopulation: number;

    constructor(name: string, duration: number, courseYears: CourseYear[], targetPopulation:number = 50) {
        this.name = name;
        this.duration = duration;
        this.courseYears = courseYears;
        this.targetPopulation = targetPopulation;
    }

    updateTargetPopulation(population: number) {
        this.targetPopulation = population;
    }

    /**
     * Intake is a calculated value based on the duration of the course and a user-defined
     * target population. Due to the capacity limits for classes, the general consensus is
     * that players should take students in multiples of 8 (or as close as possible to the
     * _next_ multiple of 8). Essentially, it's better t take 15 students than to take 9.
     *
     * With this in mind, we calculate an annual intake that gets players as close to the
     * target population as possible (without _exceeding it) while maintaining a consistent
     * annual intake each year.
     *
     * Defining this as a `getter` allows us to access intake as an attribute (c.intake)
     * rather than a function (c.intake()).
     *
     * @return The ideal annual intake for the course given its target population
     */
    get intake(): number {
        return Math.floor(this.targetPopulation / this.duration / 8) * 8;
    }

    /**
     * @return This function calculates how many times the course will need to use each
     * room in a given year and returns that data in an array containing one
     * ClassCount object for each year of the course.
     *
     * **NOTE:** The counts returned here reflect how many times the specific rooms
     * need to be used.
     */
    get classCounts(): ClassCount[] {
        const classGroups = this.intake / 8;

        const classCounts: ClassCount[] = [];
        for (const cy of this.courseYears) {

            const roomCounts:RoomCount[] = [];
            for (const code of cy.rooms) {
                // Some classes use the same room multiple times in a year.
                // See if we've already started a count for this room
                const existingCount = roomCounts.find((r) => r.code == code);

                if (existingCount) {
                    // If we started a count already, add to it
                    existingCount.count += classGroups;
                } else {
                    // Otherwise, start a new count
                    roomCounts.push({ code, count: classGroups });
                }
            }

            classCounts.push({ year: cy.year, counts: roomCounts });
        }

        return classCounts;
    }

    /**
     * @return Returns an array of RoomCount objects identifying how many copies
     * of each room will be needed to run the course.
     *
     * **NOTE:** The counts returned by this function are only viable when using
     * the _isolated_ approach to room assignment where each room can only be used
     * by one course.
     */
    get roomCounts(): RoomCount[] {
        const finalCounts:RoomCount[] = [];

        /*  This loop builds the total counts for each use of rooms across
        all years of the course  */
        for (const c of this.classCounts) {
            for (const r of c.counts) {
                const existingCount = finalCounts.find((ec) => ec.code = r.code);

                if (existingCount) {
                    // If we started a count for this room, add to it.
                    existingCount.count += r.count;
                } else {
                    // Otherwise start a new count
                    finalCounts.push({ code: r.code, count: r.count});
                    /*  NOTE: functionally, we could probably just do
                    finalCounts.push(r) here and get the same result, but I'd
                    rather not manipulate the original classCount results  */
                }
            }
        }

        /*  Now that we know the total number of times each room is used in a year
        we need to divide each of those totals by 6 to determine how many copies
        of the room to place in our campus (rounding up)  */
        finalCounts.forEach((c) => {
            c.count = Math.ceil(c.count / 6);
        });

        return finalCounts;
    }
}
