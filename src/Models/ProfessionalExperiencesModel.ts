export default interface ProfessionalExperiencesModel {
    enterprise: string,
    image: string;
    totalTime: Date | string,
    endTime: Date | string,
    jobs: Array<{
        name: string,
        startTime: Date | string,
        endTime: Date | string,
        address: string,
        tasks: Array<string>
    }>
}