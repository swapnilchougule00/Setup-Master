import * as fs from "fs";
import * as vscode from "vscode";
import { DependencyInstaller } from "../../dependencyInstaller";
import path from "path";

export class frameworkInstaller extends DependencyInstaller {
  baseAppName = "my-project";

  install() {
    const dependencyArray = this.selectedDependencies;

    let framework = "";
    const uniqueAppName = this.getUniqueAppDirectory(this.baseAppName);

    if (dependencyArray.includes("frontend-vite")) {
      framework = "vite";
      const viteCommand = `npm create vite@latest ${uniqueAppName} -- --template  ${
        dependencyArray.includes("frontend-ts") ? "react-ts" : "react"
      }`;
      this.runCommand(viteCommand);
      this.runCommand(`cd ${uniqueAppName}`);
      this.runCommand("npm install");
    } else if (dependencyArray.includes("frontend-react")) {
      framework = "react";

      const craCommand = `npx create-react-app@latest ${uniqueAppName}  ${
        dependencyArray.includes("frontend-ts") ? "--template typescript" : ""
      }`;
      this.runCommand(craCommand);
      this.runCommand(`cd ${uniqueAppName}`);
      this.runCommand("npm install");
    } else if (dependencyArray.includes("frontend-next")) {
      framework = "next";

      const nextCommand = `npx create-next-app@latest ${uniqueAppName} ${
        dependencyArray.includes("frontend-ts") ? "--typescript" : "--javascript"
      } --no-tailwind --eslint --src-dir --app --import-alias '@/*' --yes
`;
      this.runCommand(nextCommand);
      this.runCommand(`cd ${uniqueAppName}`);
      this.runCommand("npm install");
    }

    vscode.window.showInformationMessage(`${framework} setup complete!`);
  }
}
