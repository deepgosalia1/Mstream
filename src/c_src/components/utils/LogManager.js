import ReactNative from 'react-native'
import RNPankanisLog from 'react-native-pankanis-logger';
import stacktraceParser from "stacktrace-parser";
import { zip } from 'pankanis-zip-archive'
import RNFetchBlob from 'react-native-fetch-blob'
const {
    DeviceEventEmitter,
    NativeAppEventEmitter,
    Platform,
    NativeModules
} = ReactNative

const TAG = 'apiClass'
export default class LogManager {

    static myInstance = null;

    /**
     * @returns {LogManager}
     */
    static getInstance() {
        if (this.myInstance == null) {
            this.myInstance = new LogManager();

            if (Platform.OS === 'android') {
                RNPankanisLog.initLogger();
            }
            //Enable RN error Logging
            this.myInstance.setupRNErrorLogging()
        }
        return this.myInstance;
    }

    /**
     * 
     * @param {String} name 
     * @param {String} message 
     * @param {JSON} jsonObject 
     */
    info(name, message, jsonObject) {
        console.log(name, message, jsonObject)
        if (jsonObject) {
            message = `${message} ${JSON.stringify(jsonObject)}`
        }
        RNPankanisLog.info(name, message)
    }

    /**
     * 
     * @param {String} name 
     * @param {String} message 
     * @param {JSON} jsonObject 
     */
    error(name, message, jsonObject) {
        console.log(name, message, jsonObject)
        if (jsonObject) {
            message = `${message} ${JSON.stringify(jsonObject)}`
        }
        RNPankanisLog.error(name, message)
    }

    /**
     * 
     * @param {String} name 
     * @param {String} message 
     * @param {JSON} jsonObject 
     */
    debug(name, message, jsonObject) {
        console.log(name, message, jsonObject)
        if (jsonObject) {
            message = `${message} ${JSON.stringify(jsonObject)}`
        }
        RNPankanisLog.debug(name, message)
    }

    /**
     * 
     * @param {String} name 
     * @param {String} message 
     * @param {JSON} jsonObject 
     */
    fatal(name, message, jsonObject) {
        console.log(name, message, jsonObject)
        if (jsonObject) {
            message = `${message} ${JSON.stringify(jsonObject)}`
        }
        RNPankanisLog.fatal(name, message)
    }

    /**
     * 
     * @param {String} name 
     * @param {String} message 
     * @param {JSON} jsonObject 
     */
    trace(name, message, jsonObject) {
        console.log(name, message, jsonObject)
        if (jsonObject) {
            message = `${message} ${JSON.stringify(jsonObject)}`
        }
        RNPankanisLog.trace(name, message)
    }

    /**
     * 
     * @param {String} name 
     * @param {String} message 
     * @param {JSON} jsonObject 
     */
    warn(name, message, jsonObject) {
        console.log(name, message, jsonObject)
        if (jsonObject) {
            message = `${message} ${JSON.stringify(jsonObject)}`
        }
        RNPankanisLog.warn(name, message)
    }

    sendLogs() {
        if (Platform.OS === 'ios') {
            const zipName = "Testing.zip"
            const targetPath = RNFetchBlob.DocumentDir;
            zip(targetPath, zipName)
                .then((path) => {
                    console.log(`zip completed at ${path}`)
                    RNPankanisLog.emailLogsFrom(path, "subject", "body", "attachmentname", "deviceInfo", ['jagprit.batra@gmail.com', 'jagprit.batra@pankanis.com'], ['jagprit.batra@gmail.com', 'jagprit.batra@pankanis.com'], (response) => {
                        //Show Alert
                    })
                })
                .catch((error) => {
                    console.log(error)
                });
        } else {
            RNPankanisLog.emailLogsFrom("subject", "body", "attachmentname", ['sagar.vora@speridian.com'], ['jagprit.batra@speridian.com'])
        }

    }

    setupRNErrorLogging() {
        if (ErrorUtils) {
            const defaultHandler =
                ErrorUtils.getGlobalHandler && ErrorUtils.getGlobalHandler();
            if (defaultHandler) {
                const parseErrorStack = error => {
                    if (!error || !error.stack) {
                        return [];
                    }
                    return Array.isArray(error.stack)
                        ? error.stack
                        : stacktraceParser.parse(error.stack);
                };

                ErrorUtils.setGlobalHandler((error, isFatal) => {
                    const stack = parseErrorStack(error);
                    this.rnerror(isFatal, error.message, stack);
                    defaultHandler && defaultHandler(error, isFatal);
                });
            }
        }
    }

    rnerror(fatal, message, stackTrace) {
        let errorString = `ERROR: ${message}  \nSTACKSTRACE:\n`;
        if (stackTrace && Array.isArray(stackTrace)) {
            const stackStrings = stackTrace.map(stackTraceItem => {
                let methodName = "-";
                let lineNumber = "-";
                let column = "-";
                if (stackTraceItem.methodName) {
                    methodName =
                        stackTraceItem.methodName === "<unknown>"
                            ? "-"
                            : stackTraceItem.methodName;
                }
                if (stackTraceItem.lineNumber !== undefined) {
                    lineNumber = stackTraceItem.lineNumber.toString();
                }
                if (stackTraceItem.column !== undefined) {
                    column = stackTraceItem.column.toString();
                }
                return `Method: ${methodName}, LineNumber: ${lineNumber}, Column: ${column}\n`;
            });
            errorString += stackStrings.join("\n");
        }
        if (fatal) {
            //Logging stack-trace for RNFatal
            RNPankanisLog.warn("RNFatal", errorString)
        } else {
            //Logging stack-trace for RNError
            RNPankanisLog.error("RNError", errorString)
        }
    }
}