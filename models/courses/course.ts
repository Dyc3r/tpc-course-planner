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
        // TODO: Build this function
        return [];
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
        // TODO: Build this function
        return [];
    }
}
