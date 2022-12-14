/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => StatusBarQuote
});
module.exports = __toCommonJS(main_exports);
var import_obsidian3 = require("obsidian");

// components/SampleModal.ts
var import_obsidian = require("obsidian");
var SampleModal = class extends import_obsidian.Modal {
  constructor(app) {
    super(app);
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.setText("Woah!");
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
var SampleModal_default = SampleModal;

// components/MySettingTab.ts
var import_obsidian2 = require("obsidian");
var MySettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Pick one quote that makes you brave" });
    new import_obsidian2.Setting(containerEl).setName("QUOTE").setDesc("What drives you?").addText((text) => text.setPlaceholder("Enter your mantra").setValue(this.plugin.settings.quote).onChange(async (value) => {
      console.log("Mantra: " + value);
      this.plugin.settings.quote = value;
      await this.plugin.saveSettings();
    }));
  }
};
var MySettingTab_default = MySettingTab;

// main.ts
var DEFAULT_SETTINGS = {
  quote: "Take chances, make mistakes, get messy."
};
var StatusBarQuote = class extends import_obsidian3.Plugin {
  async onload() {
    await this.loadSettings();
    const statusBar = this.addStatusBarItem();
    statusBar.createEl("span", { text: `${this.settings.quote} \u270D\uFE0F` });
    const ribbonIconEl = this.addRibbonIcon("dice", "Replace quote", (evt) => {
      console.log("ribbon clicked");
    });
    this.addCommand({
      id: "open-modal-replace-quote",
      name: "Replace status bar quote",
      callback: () => {
        new SampleModal_default(this.app).open();
      }
    });
    this.addSettingTab(new MySettingTab_default(this.app, this));
  }
  onunload() {
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyIsICJjb21wb25lbnRzL1NhbXBsZU1vZGFsLnRzIiwgImNvbXBvbmVudHMvTXlTZXR0aW5nVGFiLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBQbHVnaW4gfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgU2FtcGxlTW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy9TYW1wbGVNb2RhbFwiO1xuaW1wb3J0IE15U2V0dGluZ1RhYiBmcm9tIFwiLi9jb21wb25lbnRzL015U2V0dGluZ1RhYlwiO1xuXG5pbnRlcmZhY2UgTXlQbHVnaW5TZXR0aW5ncyB7XG5cdHF1b3RlOiBzdHJpbmc7XG59XG5cbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IE15UGx1Z2luU2V0dGluZ3MgPSB7XG5cdHF1b3RlOiAnVGFrZSBjaGFuY2VzLCBtYWtlIG1pc3Rha2VzLCBnZXQgbWVzc3kuJyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdHVzQmFyUXVvdGUgZXh0ZW5kcyBQbHVnaW4ge1xuXHRzZXR0aW5nczogTXlQbHVnaW5TZXR0aW5ncztcblxuXHRhc3luYyBvbmxvYWQoKSB7XG5cdFx0YXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcblxuXHRcdGNvbnN0IHN0YXR1c0JhciA9IHRoaXMuYWRkU3RhdHVzQmFySXRlbSgpO1xuXHRcdHN0YXR1c0Jhci5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBgJHt0aGlzLnNldHRpbmdzLnF1b3RlfSBcdTI3MERcdUZFMEZgIH0pO1xuXG5cdFx0Ly8gVE9ETzogQWRkIHJpYmJvbiBpY29uIHRoYXQgcmVwbGFjZSBxdW90ZSBzZXR0aW5nLlxuXHRcdGNvbnN0IHJpYmJvbkljb25FbCA9IHRoaXMuYWRkUmliYm9uSWNvbignZGljZScsICdSZXBsYWNlIHF1b3RlJywgKGV2dDogTW91c2VFdmVudCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCJyaWJib24gY2xpY2tlZFwiKVxuXHRcdH0pO1xuXG5cdFx0Ly8gVE9ETzogQWRkIGNvbW1hbmQgdGhhdCByZXBsYWNlIHF1b3RlIHNldHRpbmcuXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAnb3Blbi1tb2RhbC1yZXBsYWNlLXF1b3RlJyxcblx0XHRcdG5hbWU6ICdSZXBsYWNlIHN0YXR1cyBiYXIgcXVvdGUnLFxuXHRcdFx0Y2FsbGJhY2s6ICgpID0+IHtcblx0XHRcdFx0bmV3IFNhbXBsZU1vZGFsKHRoaXMuYXBwKS5vcGVuKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBUaGlzIGFkZHMgYSBzZXR0aW5ncyB0YWIgc28gdGhlIHVzZXIgY2FuIGNvbmZpZ3VyZSB2YXJpb3VzIGFzcGVjdHMgb2YgdGhlIHBsdWdpblxuXHRcdHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgTXlTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XG5cdH1cblxuXHRvbnVubG9hZCgpIHtcblx0fVxuXG5cdGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcblx0XHR0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9TRVRUSU5HUywgYXdhaXQgdGhpcy5sb2FkRGF0YSgpKTtcblx0fVxuXG5cdGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcblx0XHRhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xuXHR9XG59XG4iLCAiaW1wb3J0IHtBcHAsIE1vZGFsfSBmcm9tIFwib2JzaWRpYW5cIjtcblxuY2xhc3MgU2FtcGxlTW9kYWwgZXh0ZW5kcyBNb2RhbCB7XG5cdGNvbnN0cnVjdG9yKGFwcDogQXBwKSB7XG5cdFx0c3VwZXIoYXBwKTtcblx0fVxuXG5cdG9uT3BlbigpIHtcblx0XHRjb25zdCB7Y29udGVudEVsfSA9IHRoaXM7XG5cdFx0Y29udGVudEVsLnNldFRleHQoJ1dvYWghJyk7XG5cdH1cblxuXHRvbkNsb3NlKCkge1xuXHRcdGNvbnN0IHtjb250ZW50RWx9ID0gdGhpcztcblx0XHRjb250ZW50RWwuZW1wdHkoKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBTYW1wbGVNb2RhbDtcbiIsICJpbXBvcnQge0FwcCwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZ30gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgU3RhdHVzQmFyUXVvdGUgZnJvbSBcIi4uL21haW5cIjtcblxuY2xhc3MgTXlTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG5cdHBsdWdpbjogU3RhdHVzQmFyUXVvdGU7XG5cblx0Y29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogU3RhdHVzQmFyUXVvdGUpIHtcblx0XHRzdXBlcihhcHAsIHBsdWdpbik7XG5cdFx0dGhpcy5wbHVnaW4gPSBwbHVnaW47XG5cdH1cblxuXHRkaXNwbGF5KCk6IHZvaWQge1xuXHRcdGNvbnN0IHtjb250YWluZXJFbH0gPSB0aGlzO1xuXG5cdFx0Y29udGFpbmVyRWwuZW1wdHkoKTtcblxuXHRcdGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMicsIHt0ZXh0OiAnUGljayBvbmUgcXVvdGUgdGhhdCBtYWtlcyB5b3UgYnJhdmUnfSk7XG5cblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcblx0XHRcdC5zZXROYW1lKCdRVU9URScpXG5cdFx0XHQuc2V0RGVzYygnV2hhdCBkcml2ZXMgeW91PycpXG5cdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCdFbnRlciB5b3VyIG1hbnRyYScpXG5cdFx0XHRcdC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5xdW90ZSlcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdNYW50cmE6ICcgKyB2YWx1ZSk7XG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MucXVvdGUgPSB2YWx1ZTtcblx0XHRcdFx0XHRhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcblx0XHRcdFx0fSkpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15U2V0dGluZ1RhYjtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBdUI7OztBQ0F2QixzQkFBeUI7QUFFekIsSUFBTSxjQUFOLGNBQTBCLHNCQUFNO0FBQUEsRUFDL0IsWUFBWSxLQUFVO0FBQ3JCLFVBQU0sR0FBRztBQUFBLEVBQ1Y7QUFBQSxFQUVBLFNBQVM7QUFDUixVQUFNLEVBQUMsY0FBYTtBQUNwQixjQUFVLFFBQVEsT0FBTztBQUFBLEVBQzFCO0FBQUEsRUFFQSxVQUFVO0FBQ1QsVUFBTSxFQUFDLGNBQWE7QUFDcEIsY0FBVSxNQUFNO0FBQUEsRUFDakI7QUFDRDtBQUVBLElBQU8sc0JBQVE7OztBQ2xCZix1QkFBNkM7QUFHN0MsSUFBTSxlQUFOLGNBQTJCLGtDQUFpQjtBQUFBLEVBRzNDLFlBQVksS0FBVSxRQUF3QjtBQUM3QyxVQUFNLEtBQUssTUFBTTtBQUNqQixTQUFLLFNBQVM7QUFBQSxFQUNmO0FBQUEsRUFFQSxVQUFnQjtBQUNmLFVBQU0sRUFBQyxnQkFBZTtBQUV0QixnQkFBWSxNQUFNO0FBRWxCLGdCQUFZLFNBQVMsTUFBTSxFQUFDLE1BQU0sc0NBQXFDLENBQUM7QUFFeEUsUUFBSSx5QkFBUSxXQUFXLEVBQ3JCLFFBQVEsT0FBTyxFQUNmLFFBQVEsa0JBQWtCLEVBQzFCLFFBQVEsVUFBUSxLQUNmLGVBQWUsbUJBQW1CLEVBQ2xDLFNBQVMsS0FBSyxPQUFPLFNBQVMsS0FBSyxFQUNuQyxTQUFTLE9BQU8sVUFBVTtBQUMxQixjQUFRLElBQUksYUFBYSxLQUFLO0FBQzlCLFdBQUssT0FBTyxTQUFTLFFBQVE7QUFDN0IsWUFBTSxLQUFLLE9BQU8sYUFBYTtBQUFBLElBQ2hDLENBQUMsQ0FBQztBQUFBLEVBQ0w7QUFDRDtBQUVBLElBQU8sdUJBQVE7OztBRnhCZixJQUFNLG1CQUFxQztBQUFBLEVBQzFDLE9BQU87QUFDUjtBQUVBLElBQXFCLGlCQUFyQixjQUE0Qyx3QkFBTztBQUFBLEVBR2xELE1BQU0sU0FBUztBQUNkLFVBQU0sS0FBSyxhQUFhO0FBRXhCLFVBQU0sWUFBWSxLQUFLLGlCQUFpQjtBQUN4QyxjQUFVLFNBQVMsUUFBUSxFQUFFLE1BQU0sR0FBRyxLQUFLLFNBQVMscUJBQVcsQ0FBQztBQUdoRSxVQUFNLGVBQWUsS0FBSyxjQUFjLFFBQVEsaUJBQWlCLENBQUMsUUFBb0I7QUFDckYsY0FBUSxJQUFJLGdCQUFnQjtBQUFBLElBQzdCLENBQUM7QUFHRCxTQUFLLFdBQVc7QUFBQSxNQUNmLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLFVBQVUsTUFBTTtBQUNmLFlBQUksb0JBQVksS0FBSyxHQUFHLEVBQUUsS0FBSztBQUFBLE1BQ2hDO0FBQUEsSUFDRCxDQUFDO0FBR0QsU0FBSyxjQUFjLElBQUkscUJBQWEsS0FBSyxLQUFLLElBQUksQ0FBQztBQUFBLEVBQ3BEO0FBQUEsRUFFQSxXQUFXO0FBQUEsRUFDWDtBQUFBLEVBRUEsTUFBTSxlQUFlO0FBQ3BCLFNBQUssV0FBVyxPQUFPLE9BQU8sQ0FBQyxHQUFHLGtCQUFrQixNQUFNLEtBQUssU0FBUyxDQUFDO0FBQUEsRUFDMUU7QUFBQSxFQUVBLE1BQU0sZUFBZTtBQUNwQixVQUFNLEtBQUssU0FBUyxLQUFLLFFBQVE7QUFBQSxFQUNsQztBQUNEOyIsCiAgIm5hbWVzIjogW10KfQo=
