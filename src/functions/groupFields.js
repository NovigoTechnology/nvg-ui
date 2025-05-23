export const groupFields = (fields) => {
  const tabs = [];
  let currentTab = { tabName: "initial_tab", label: "Details", sections: [] };
  let currentSection = {
    sectionName: "initial_section",
    label: "Details",
    columns: [],
  };
  let currentColumn = { columnName: "initial_column", fields: [] };

  const closeColumn = () => {
    if (currentColumn.fields.length) currentSection.columns.push(currentColumn);
  };
  const closeSection = () => {
    closeColumn();
    if (currentSection.columns.length) currentTab.sections.push(currentSection);
  };
  const closeTab = () => {
    closeSection();
    if (currentTab.sections.length) tabs.push(currentTab);
  };

  fields.forEach((field) => {
    switch (field.fieldtype) {
      case "Tab Break":
        closeTab();
        currentTab = { tabName: field.fieldname, label: field.label, sections: [] };
        currentSection = {
          sectionName: field.fieldname + "_init",
          label: "General",
          columns: [],
        };
        currentColumn = { columnName: field.fieldname + "_col", fields: [] };
        break;

      case "Section Break":
        closeSection();
        currentSection = { sectionName: field.fieldname, label: field.label, columns: [] };
        currentColumn = { columnName: field.fieldname + "_col", fields: [] };
        break;

      case "Column Break":
        closeColumn();
        currentColumn = { columnName: field.fieldname, fields: [] };
        break;

      default:
        currentColumn.fields.push(field);
    }
  });

  closeTab();
  return tabs;
};