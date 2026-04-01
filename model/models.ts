import localVarRequest from 'request';

export * from './aPIAutocompleteDistrictResult';
export * from './aPIAutocompleteSchoolResult23';
export * from './aPIBoundary12';
export * from './aPIChronicAbsenteeismRate';
export * from './aPICounty';
export * from './aPIDistrictAC';
export * from './aPIDistrictFull21';
export * from './aPIDistrictList21';
export * from './aPIDistrictListRank21';
export * from './aPIDistrictSum';
export * from './aPIDistrictSummary21';
export * from './aPIDropoutRate';
export * from './aPIGraduationRate';
export * from './aPILEARankHistory';
export * from './aPILEAYearlyDetail';
export * from './aPILatLong';
export * from './aPILocation';
export * from './aPIPolyline';
export * from './aPIRankHistory';
export * from './aPISchoolAC23';
export * from './aPISchoolFinance';
export * from './aPISchoolFull22';
export * from './aPISchoolList22';
export * from './aPISchoolListRank21';
export * from './aPISchoolReview';
export * from './aPISchoolSummary21';
export * from './aPISchoolSummary22';
export * from './aPITestScore';
export * from './aPITestScoreWrapper';
export * from './aPIYearlyDemographics';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { APIAutocompleteDistrictResult } from './aPIAutocompleteDistrictResult';
import { APIAutocompleteSchoolResult23 } from './aPIAutocompleteSchoolResult23';
import { APIBoundary12 } from './aPIBoundary12';
import { APIChronicAbsenteeismRate } from './aPIChronicAbsenteeismRate';
import { APICounty } from './aPICounty';
import { APIDistrictAC } from './aPIDistrictAC';
import { APIDistrictFull21 } from './aPIDistrictFull21';
import { APIDistrictList21 } from './aPIDistrictList21';
import { APIDistrictListRank21 } from './aPIDistrictListRank21';
import { APIDistrictSum } from './aPIDistrictSum';
import { APIDistrictSummary21 } from './aPIDistrictSummary21';
import { APIDropoutRate } from './aPIDropoutRate';
import { APIGraduationRate } from './aPIGraduationRate';
import { APILEARankHistory } from './aPILEARankHistory';
import { APILEAYearlyDetail } from './aPILEAYearlyDetail';
import { APILatLong } from './aPILatLong';
import { APILocation } from './aPILocation';
import { APIPolyline } from './aPIPolyline';
import { APIRankHistory } from './aPIRankHistory';
import { APISchoolAC23 } from './aPISchoolAC23';
import { APISchoolFinance } from './aPISchoolFinance';
import { APISchoolFull22 } from './aPISchoolFull22';
import { APISchoolList22 } from './aPISchoolList22';
import { APISchoolListRank21 } from './aPISchoolListRank21';
import { APISchoolReview } from './aPISchoolReview';
import { APISchoolSummary21 } from './aPISchoolSummary21';
import { APISchoolSummary22 } from './aPISchoolSummary22';
import { APITestScore } from './aPITestScore';
import { APITestScoreWrapper } from './aPITestScoreWrapper';
import { APIYearlyDemographics } from './aPIYearlyDemographics';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
}

let typeMap: {[index: string]: any} = {
    "APIAutocompleteDistrictResult": APIAutocompleteDistrictResult,
    "APIAutocompleteSchoolResult23": APIAutocompleteSchoolResult23,
    "APIBoundary12": APIBoundary12,
    "APIChronicAbsenteeismRate": APIChronicAbsenteeismRate,
    "APICounty": APICounty,
    "APIDistrictAC": APIDistrictAC,
    "APIDistrictFull21": APIDistrictFull21,
    "APIDistrictList21": APIDistrictList21,
    "APIDistrictListRank21": APIDistrictListRank21,
    "APIDistrictSum": APIDistrictSum,
    "APIDistrictSummary21": APIDistrictSummary21,
    "APIDropoutRate": APIDropoutRate,
    "APIGraduationRate": APIGraduationRate,
    "APILEARankHistory": APILEARankHistory,
    "APILEAYearlyDetail": APILEAYearlyDetail,
    "APILatLong": APILatLong,
    "APILocation": APILocation,
    "APIPolyline": APIPolyline,
    "APIRankHistory": APIRankHistory,
    "APISchoolAC23": APISchoolAC23,
    "APISchoolFinance": APISchoolFinance,
    "APISchoolFull22": APISchoolFull22,
    "APISchoolList22": APISchoolList22,
    "APISchoolListRank21": APISchoolListRank21,
    "APISchoolReview": APISchoolReview,
    "APISchoolSummary21": APISchoolSummary21,
    "APISchoolSummary22": APISchoolSummary22,
    "APITestScore": APITestScore,
    "APITestScoreWrapper": APITestScoreWrapper,
    "APIYearlyDemographics": APIYearlyDemographics,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
