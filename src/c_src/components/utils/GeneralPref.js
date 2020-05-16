import { AsyncStorage, Alert } from 'react-native';
import * as Pref from './Preferences';
import Moment from 'moment';



var api = require('../clients/api');


export function set_USER_SIGNED_IN() {
    AsyncStorage.setItem(Pref.USER_SIGNED_IN, '1');
}

export async function isUserSignedIn() {
    try {
        const isUserSignedIn = await AsyncStorage.getItem(Pref.USER_SIGNED_IN);
        if (isUserSignedIn) {
            return isUserSignedIn;
        }
        return false;
    } catch (error) {
        return false;
    }
}

export function setUserLoggedInResponse(data) {
    if (data) {
        AsyncStorage.setItem(Pref.USER_LOGGED_IN_RESPONSE, data)
    }
}

export function getUserLoggedInResponse() {
    return AsyncStorage.getItem(Pref.USER_LOGGED_IN_RESPONSE, (err, result) => {
        return result;
    });
}

export function getUserId() {
    return getUserLoggedInResponse().then((result) => {
        if (result) {
            let userResponse = JSON.parse(result);
            let user_id = userResponse.user.user_id
            return user_id;
        } else {
            return '';
        }
    })
}

export function getUserRole() {
    AsyncStorage.getItem(Pref.USER_ROLE, (err, result) => {
        console.log('userrole', result)
        return result;
    });
}

export function setDeviceToken(deviceToken) {
    console.log('stringify :', deviceToken)
    if (deviceToken)
        AsyncStorage.setItem(Pref.DEVICE_TOKEN, deviceToken)
    else console.log('not set, stringify failed:', Pref.DEVICE_TOKEN, deviceToken)
}


export function getDeviceToken() {
    return AsyncStorage.getItem(Pref.DEVICE_TOKEN, (err, result) => {
        console.log('device token : ', result)
        return result;
    });
}


export function setSessionCookie(sessionCookie) {
    console.log('stringify :', sessionCookie)
    if (sessionCookie)
        AsyncStorage.setItem(Pref.SESSION_COOKIE, sessionCookie)
    else console.log('not set, stringify failed:', Pref.SESSION_COOKIE, sessionCookie)
}

export default function renderIf(condition, content) {
    if (condition) {
        return content;
    } else {
        return null;
    }
}




export function getEntityFromSysParams(entity, callback) {
    getSysParams(result => {
        const { data, error } = result;
        if (data) {
            let sysParams = _.filter(data.docs, (item, pos) => {
                return item.paramtype == entity;
            })
            callback({ data: sysParams })
        } else if (error) {
            callback({ error })
        }
    })
}


export function getEntityFromMaster(entityType, callback) {
    getMasterEntityData((result) => {
        const { data, error } = result;
        if (data) {
            let masterEntityData = _.find(data.docs, (item, pos) => {
                return item.code == entityType;
            })
            callback({ data: masterEntityData })
        } else if (error) {
            callback({ error })
        }
    })
}

/* CHECK IN STATUS */
export function set_USER_CHECKED_IN(checkIn) {
    if (checkIn == true) {
        console.log("i was her setting IS_CHECKED_IN  1")
        AsyncStorage.setItem(Pref.IS_CHECKED_IN, '1');
    } else {
        console.log("i was her setting IS_CHECKED_IN  0")
        AsyncStorage.setItem(Pref.IS_CHECKED_IN, '0');
    }

}

export function isUserCheckedIn() {
    return AsyncStorage.getItem(Pref.IS_CHECKED_IN, (err, result) => {
        return result;
    });
}

export async function getLastSyncedTime(key) {
    try {
        value = await AsyncStorage.getItem(key).then(
            (values) => {
                collect = values;
                console.log('Then: ', values);
            });
    } catch (error) {
        console.log('Error getLastSyncedTime: ', error);
        collect = '0'
    }
    console.log('Final getLastSyncedTime: ', collect);
    return collect;
}

export function setLastSyncTimestamp(time) {
    console.log('stringify :', time)
    if (time)
        AsyncStorage.setItem(Pref.LAST_SYNC_TIME, time)
    else console.log('not set, stringify failed:', Pref.LAST_SYNC_TIME, time)
}


/* LAST CHECK-OUT TIMESTAMP */
export function setLastCheckInTimestamp(time) {
    console.log('stringify time :', time)
    if (time)
        AsyncStorage.setItem(Pref.LAST_CHECK_IN_TIME, time)
    else console.log('not set, stringify failed:', Pref.LAST_CHECK_IN_TIME, time)
}

export async function getLastCheckInTime(key) {
    try {
        value = await AsyncStorage.getItem(key).then(
            (values) => {
                collect = values;
                console.log('Then: ', values);
            });
    } catch (error) {
        console.log('Error getLastCheckInTime: ', error);
        collect = '0'
    }
    console.log('Final getLastCheckInTime: ', collect);
    return collect;
}


export function getSessionCookie() {
    AsyncStorage.getItem(Pref.SESSION_COOKIE, (err, result) => {
        console.log('sessionCookie:', result)
        return result;
    });
}

export function eventLogout() {
    //Clear all default values
    AsyncStorage.setItem(Pref.USER_SIGNED_IN, '0');
    AsyncStorage.removeItem(Pref.USER_LOGGED_IN_RESPONSE)
    AsyncStorage.removeItem(Pref.LAST_SYNC_TIME)
    //Call logout Api
    return api.getRequestWithUrl(`${api.BASE_URL}/api/v1/logout`).then(
        (responseJson) => {
            return responseJson;
        }
    );
}

export function savingDataInCache(value) {
    value.map((object, pos) => {
        let urlVal = `${api.BASE_URL}/api/v1/download/fs/${object.output_location}/${object.user_document_name}`;


        RNFetchBlob.config({
            IOSBackgroundTask : true,
            IOSDownloadTask : true,
            path: getCachePath() + object.user_document_name,
            fileName : object.user_document_name,
            folder:'attachments'
        }).fetch('GET', urlVal, {
            //some headers ..
        }).then((res) => {
            // the path should be dirs.DocumentDir + 'path-to-file.anything'
            let xVal = res.path();
            console.log('The file saved to ', res.path());
        })
        /*
        RNFetchBlob.config({
            path: getCachePath() + object.user_document_name,
        }).fetch('GET', urlVal, {
            //some headers ..
        }).then((res) => {
            // the path should be dirs.DocumentDir + 'path-to-file.anything'
            let xVal = res.path();
            console.log('The file saved to ', res.path());
        })
        */

    })
}
export function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



export function setHasInternetConnection(hasInternet) {
    let internetConnection = hasInternet ? hasInternet : 'false';
    AsyncStorage.setItem(Pref.HAS_INTERNET, internetConnection)
}

export function hasInternetConnection(callback) {
    AsyncStorage.getItem(Pref.HAS_INTERNET, (err, result) => {
        if (result) {
            callback({ result })
        } else {
            callback({ error: err })
        }
    })
}
