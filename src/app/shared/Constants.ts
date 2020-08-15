export class Constants {
    public static DashboardConstant = {
        header: 'SpaceX Launch Programs',
        missionIds: 'Mission Ids',
        launchYear: 'Launch Year',
        successfulLaunch: 'Successful Launch',
        successfulLanding: 'Successful Landing',
        trueConstant: 'True',
        falseConstant: 'False'
    }

    public static yearArray = [
        2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020
    ];

    public static apiService = {
        initialDataURL: 'https://api.spaceXdata.com/v3/launches?limit=100',
        filterURL: 'https://api.spaceXdata.com/v3/launches?limit=100',
    }
}