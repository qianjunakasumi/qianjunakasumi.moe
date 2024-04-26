export interface ResumeItemTitles {
    techStackTitle: string;
    certsTitle: string;
    summerCampsTitle: string;
    practicesTitle: string;
    moreContentTitle: string;
}

export interface ResumeContents {
    titles: ResumeItemTitles;
    headers: Array<Array<string>>;
    certs: Array<string>;
    summerCamps: Array<string>;
    practices: Array<string>;
}
