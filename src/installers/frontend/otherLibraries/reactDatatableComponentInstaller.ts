import { DependencyInstaller } from "../../dependencyInstaller";
import * as vscode from "vscode";

export class reactDatatableComponentInstaller extends DependencyInstaller {
  install() {
    this.runCommand("npm install react-data-table-component");
    vscode.window.showInformationMessage("React Datatable Component installed successfully!");
  }
}
