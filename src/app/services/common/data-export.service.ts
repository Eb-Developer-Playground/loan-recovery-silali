import { Injectable } from '@angular/core';
import { download, mkConfig, generateCsv } from 'export-to-csv';

@Injectable({
  providedIn: 'root',
})
export class DataExportService {
  config = mkConfig({ useKeysAsHeaders: true });

  constructor() {}

  toCSV(data: any) {
    const csv = generateCsv(this.config)(data);
    return download(this.config)(csv);
  }
}
