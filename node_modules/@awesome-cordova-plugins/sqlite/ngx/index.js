import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova, checkAvailability, cordovaInstance, instancePropertyGet, instancePropertySet } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var SQLiteObject = /** @class */ (function () {
    function SQLiteObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    SQLiteObject.prototype.addTransaction = function (transaction) { return cordovaInstance(this, "addTransaction", { "sync": true }, arguments); };
    SQLiteObject.prototype.transaction = function (fn) { return cordovaInstance(this, "transaction", { "successIndex": 2, "errorIndex": 1 }, arguments); };
    SQLiteObject.prototype.readTransaction = function (fn) { return cordovaInstance(this, "readTransaction", {}, arguments); };
    SQLiteObject.prototype.startNextTransaction = function () { return cordovaInstance(this, "startNextTransaction", { "sync": true }, arguments); };
    SQLiteObject.prototype.open = function () { return cordovaInstance(this, "open", {}, arguments); };
    SQLiteObject.prototype.close = function () { return cordovaInstance(this, "close", {}, arguments); };
    SQLiteObject.prototype.executeSql = function (statement, params) { return cordovaInstance(this, "executeSql", {}, arguments); };
    SQLiteObject.prototype.sqlBatch = function (sqlStatements) { return cordovaInstance(this, "sqlBatch", {}, arguments); };
    SQLiteObject.prototype.abortallPendingTransactions = function () { return cordovaInstance(this, "abortallPendingTransactions", { "sync": true }, arguments); };
    Object.defineProperty(SQLiteObject.prototype, "databaseFeatures", {
        get: function () { return instancePropertyGet(this, "databaseFeatures"); },
        set: function (value) { instancePropertySet(this, "databaseFeatures", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SQLiteObject.prototype, "openDBs", {
        get: function () { return instancePropertyGet(this, "openDBs"); },
        set: function (value) { instancePropertySet(this, "openDBs", value); },
        enumerable: false,
        configurable: true
    });
    return SQLiteObject;
}());
export { SQLiteObject };
var SQLite = /** @class */ (function (_super) {
    __extends(SQLite, _super);
    function SQLite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SQLite.prototype.create = function (config) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return new Promise(function (resolve, reject) {
                    sqlitePlugin.openDatabase(config, function (db) { return resolve(new SQLiteObject(db)); }, reject);
                });
            }
        })();
    };
    SQLite.prototype.echoTest = function () { return cordova(this, "echoTest", {}, arguments); };
    SQLite.prototype.selfTest = function () { return cordova(this, "selfTest", {}, arguments); };
    SQLite.prototype.deleteDatabase = function (config) { return cordova(this, "deleteDatabase", {}, arguments); };
    SQLite.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SQLite, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    SQLite.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SQLite });
    SQLite.pluginName = "SQLite";
    SQLite.pluginRef = "sqlitePlugin";
    SQLite.plugin = "cordova-sqlite-storage";
    SQLite.repo = "https://github.com/litehelpers/Cordova-sqlite-storage";
    SQLite.platforms = ["Android", "iOS", "macOS", "Windows"];
    SQLite = __decorate([], SQLite);
    return SQLite;
}(AwesomeCordovaNativePlugin));
export { SQLite };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SQLite, decorators: [{
            type: Injectable
        }], propDecorators: { create: [], echoTest: [], selfTest: [], deleteDatabase: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3FsaXRlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHFIQU9OLE1BQU0sK0JBQStCLENBQUM7OztJQXdEckMsc0JBQW1CLGVBQW9CO1FBQXBCLG9CQUFlLEdBQWYsZUFBZSxDQUFLO0lBQUcsQ0FBQztJQVEzQyxxQ0FBYyxhQUFDLFdBQTRDO0lBVTNELGtDQUFXLGFBQUMsRUFBK0I7SUFTM0Msc0NBQWUsYUFBQyxFQUFtQztJQU9uRCwyQ0FBb0I7SUFNcEIsMkJBQUk7SUFRSiw0QkFBSztJQVlMLGlDQUFVLGFBQUMsU0FBaUIsRUFBRSxNQUFjO0lBUzVDLCtCQUFRLGFBQUMsYUFBMEM7SUFPbkQsa0RBQTJCOzBCQTFFUCwwQ0FBZ0I7Ozs7OzswQkFDaEIsaUNBQU87Ozs7Ozt1QkFuRTdCOzs7O0lBMEw0QiwwQkFBMEI7Ozs7SUFVcEQsdUJBQU0sYUFBQyxNQUE0Qjs7O21EQUF5QjtnQkFDMUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO29CQUNqQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxVQUFDLEVBQU8sSUFBSyxPQUFBLE9BQU8sQ0FBQyxJQUFJLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUE3QixDQUE2QixFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN4RixDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFRRCx5QkFBUTtJQVVSLHlCQUFRO0lBV1IsK0JBQWMsYUFBQyxNQUE0Qjt3R0EzQ2hDLE1BQU07NEdBQU4sTUFBTTs7Ozs7O0lBQU4sTUFBTSxrQkFBTixNQUFNO2lCQTFMbkI7RUEwTDRCLDBCQUEwQjtTQUF6QyxNQUFNOzRGQUFOLE1BQU07a0JBRGxCLFVBQVU7OEJBV1QsTUFBTSxNQVlOLFFBQVEsTUFVUixRQUFRLE1BV1IsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvcmRvdmEsXG4gIENvcmRvdmFDaGVjayxcbiAgQ29yZG92YUluc3RhbmNlLFxuICBJbnN0YW5jZVByb3BlcnR5LFxuICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbixcbiAgUGx1Z2luLFxufSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmRlY2xhcmUgY29uc3Qgc3FsaXRlUGx1Z2luOiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1FMaXRlRGF0YWJhc2VDb25maWcge1xuICAvKipcbiAgICogTmFtZSBvZiB0aGUgZGF0YWJhc2UuIEV4YW1wbGU6ICdteS5kYidcbiAgICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIExvY2F0aW9uIG9mIHRoZSBkYXRhYmFzZS4gRXhhbXBsZTogJ2RlZmF1bHQnXG4gICAqL1xuICBsb2NhdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIGlPUyBEYXRhYmFzZSBMb2NhdGlvbi4gRXhhbXBsZTogJ0xpYnJhcnknXG4gICAqL1xuICBpb3NEYXRhYmFzZUxvY2F0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogc3VwcG9ydCBhcmJpdHJhcnkgZGF0YWJhc2UgbG9jYXRpb24gb24gYW5kcm9pZCB3aXRoIGh0dHBzOi8vZ2l0aHViLmNvbS9saXRlaGVscGVycy9jb3Jkb3ZhLXNxbGl0ZS1ldmNvcmUtZXh0YnVpbGQtZnJlZVxuICAgKi9cbiAgYW5kcm9pZERhdGFiYXNlTG9jYXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzdXBwb3J0IG9wZW5pbmcgcHJlLWZpbGxlZCBkYXRhYmFzZXMgd2l0aCBodHRwczovL2dpdGh1Yi5jb20vbGl0ZWhlbHBlcnMvY29yZG92YS1zcWxpdGUtZXh0XG4gICAqL1xuICBjcmVhdGVGcm9tTG9jYXRpb24/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBzdXBwb3J0IGVuY3J5cHRlZCBkYXRhYmFzZXMgd2l0aCBodHRwczovL2dpdGh1Yi5jb20vbGl0ZWhlbHBlcnMvQ29yZG92YS1zcWxjaXBoZXItYWRhcHRlclxuICAgKi9cbiAga2V5Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYlRyYW5zYWN0aW9uIHtcbiAgZXhlY3V0ZVNxbDogKHNxbDogYW55LCB2YWx1ZXM/OiBhbnlbXSwgc3VjY2Vzcz86IEZ1bmN0aW9uLCBlcnJvcj86IEZ1bmN0aW9uKSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTUUxpdGVUcmFuc2FjdGlvbiBleHRlbmRzIERiVHJhbnNhY3Rpb24ge1xuICBzdGFydDogKCkgPT4gdm9pZDtcbiAgYWRkU3RhdGVtZW50OiBEYlRyYW5zYWN0aW9uWydleGVjdXRlU3FsJ107XG4gIGhhbmRsZVN0YXRlbWVudFN1Y2Nlc3M6IChoYW5kbGVyOiBGdW5jdGlvbiwgcmVzcG9uc2U6IGFueSkgPT4gdm9pZDtcbiAgaGFuZGxlU3RhdGVtZW50RmFpbHVyZTogKGhhbmRsZXI6IEZ1bmN0aW9uLCByZXNwb25zZTogYW55KSA9PiB2b2lkO1xuICBydW46ICgpID0+IHZvaWQ7XG4gIGFib3J0OiAodHhGYWlsdXJlOiBhbnkpID0+IHZvaWQ7XG4gIGZpbmlzaDogKCkgPT4gdm9pZDtcbiAgYWJvcnRGcm9tUTogKHNxbGVycm9yOiBhbnkpID0+IHZvaWQ7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgU1FMaXRlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocHVibGljIF9vYmplY3RJbnN0YW5jZTogYW55KSB7fVxuXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgZGF0YWJhc2VGZWF0dXJlczogeyBpc1NRTGl0ZVBsdWdpbkRhdGFiYXNlOiBib29sZWFuIH07XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgb3BlbkRCczogYW55O1xuXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGFkZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiAodHg6IFNRTGl0ZVRyYW5zYWN0aW9uKSA9PiB2b2lkKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgc3VjY2Vzc0luZGV4OiAyLFxuICAgIGVycm9ySW5kZXg6IDEsXG4gIH0pXG4gIHRyYW5zYWN0aW9uKGZuOiAodHg6IERiVHJhbnNhY3Rpb24pID0+IHZvaWQpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlYWRUcmFuc2FjdGlvbihmbjogKHR4OiBTUUxpdGVUcmFuc2FjdGlvbikgPT4gdm9pZCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc3RhcnROZXh0VHJhbnNhY3Rpb24oKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIG9wZW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBjbG9zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlIFNRTCBvbiB0aGUgb3BlbmVkIGRhdGFiYXNlLiBOb3RlLCB5b3UgbXVzdCBjYWxsIGBjcmVhdGVgIGZpcnN0LCBhbmRcbiAgICogZW5zdXJlIGl0IHJlc29sdmVkIGFuZCBzdWNjZXNzZnVsbHkgb3BlbmVkIHRoZSBkYXRhYmFzZS5cbiAgICpcbiAgICogQHBhcmFtIHN0YXRlbWVudFxuICAgKiBAcGFyYW0gcGFyYW1zXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZXhlY3V0ZVNxbChzdGF0ZW1lbnQ6IHN0cmluZywgcGFyYW1zPzogYW55W10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gc3FsU3RhdGVtZW50cyB7c3RyaW5nW10gfCBzdHJpbmdbXVtdIHwgYW55W119XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgc3FsQmF0Y2goc3FsU3RhdGVtZW50czogKHN0cmluZyB8IHN0cmluZ1tdIHwgYW55KVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBhYm9ydGFsbFBlbmRpbmdUcmFuc2FjdGlvbnMoKTogdm9pZCB7fVxufVxuXG4vKipcbiAqIEBuYW1lIFNRTGl0ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBBY2Nlc3MgU1FMaXRlIGRhdGFiYXNlcyBvbiB0aGUgZGV2aWNlLlxuICogQHVzYWdlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU1FMaXRlLCBTUUxpdGVPYmplY3QgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc3FsaXRlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzcWxpdGU6IFNRTGl0ZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5zcWxpdGUuY3JlYXRlKHtcbiAqICAgbmFtZTogJ2RhdGEuZGInLFxuICogICBsb2NhdGlvbjogJ2RlZmF1bHQnXG4gKiB9KVxuICogICAudGhlbigoZGI6IFNRTGl0ZU9iamVjdCkgPT4ge1xuICpcbiAqXG4gKiAgICAgZGIuZXhlY3V0ZVNxbCgnY3JlYXRlIHRhYmxlIGRhbmNlTW92ZXMobmFtZSBWQVJDSEFSKDMyKSknLCBbXSlcbiAqICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdFeGVjdXRlZCBTUUwnKSlcbiAqICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAqXG4gKlxuICogICB9KVxuICogICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gKlxuICogYGBgXG4gKiBAY2xhc3Nlc1xuICogU1FMaXRlT2JqZWN0XG4gKiBAaW50ZXJmYWNlc1xuICogU1FMaXRlRGF0YWJhc2VDb25maWdcbiAqIFNRTGl0ZVRyYW5zYWN0aW9uXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU1FMaXRlJyxcbiAgcGx1Z2luUmVmOiAnc3FsaXRlUGx1Z2luJyxcbiAgcGx1Z2luOiAnY29yZG92YS1zcWxpdGUtc3RvcmFnZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbGl0ZWhlbHBlcnMvQ29yZG92YS1zcWxpdGUtc3RvcmFnZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdtYWNPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNRTGl0ZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIE9wZW4gb3IgY3JlYXRlIGEgU1FMaXRlIGRhdGFiYXNlIGZpbGUuXG4gICAqXG4gICAqIFNlZSB0aGUgcGx1Z2luIGRvY3MgZm9yIGFuIGV4cGxhbmF0aW9uIG9mIGFsbCBvcHRpb25zOiBodHRwczovL2dpdGh1Yi5jb20vbGl0ZWhlbHBlcnMvQ29yZG92YS1zcWxpdGUtc3RvcmFnZSNvcGVuaW5nLWEtZGF0YWJhc2VcbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZyB7U1FMaXRlRGF0YWJhc2VDb25maWd9IGRhdGFiYXNlIGNvbmZpZ3VyYXRpb25cbiAgICogQHJldHVybnMgUHJvbWlzZTxTUUxpdGVPYmplY3Q+XG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgY3JlYXRlKGNvbmZpZzogU1FMaXRlRGF0YWJhc2VDb25maWcpOiBQcm9taXNlPFNRTGl0ZU9iamVjdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzcWxpdGVQbHVnaW4ub3BlbkRhdGFiYXNlKGNvbmZpZywgKGRiOiBhbnkpID0+IHJlc29sdmUobmV3IFNRTGl0ZU9iamVjdChkYikpLCByZWplY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmeSB0aGF0IGJvdGggdGhlIEphdmFzY3JpcHQgYW5kIG5hdGl2ZSBwYXJ0IG9mIHRoaXMgcGx1Z2luIGFyZSBpbnN0YWxsZWQgaW4geW91ciBhcHBsaWNhdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBlY2hvVGVzdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRvbWF0aWNhbGx5IHZlcmlmeSBiYXNpYyBkYXRhYmFzZSBhY2Nlc3Mgb3BlcmF0aW9ucyBpbmNsdWRpbmcgb3BlbmluZyBhIGRhdGFiYXNlXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlbGZUZXN0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBkYXRhYmFzZVxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnIHtTUUxpdGVEYXRhYmFzZUNvbmZpZ30gZGF0YWJhc2UgY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkZWxldGVEYXRhYmFzZShjb25maWc6IFNRTGl0ZURhdGFiYXNlQ29uZmlnKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==