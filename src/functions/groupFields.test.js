import { describe, it, expect } from 'vitest';
import { groupFields } from './groupFields';

describe('groupFields', () => {
  it('returns an empty array when there are no fields', () => {
    expect(groupFields([])).toEqual([]);
  });

  it('closes the implicit initial tab/section/column even without any break field', () => {
    const field = { fieldname: 'customer', fieldtype: 'Data', label: 'Customer' };

    const tabs = groupFields([field]);

    expect(tabs).toHaveLength(1);
    expect(tabs[0].tabName).toBe('initial_tab');
    expect(tabs[0].sections[0].columns[0].fields).toEqual([field]);
  });

  it('starts a new tab on Tab Break, closing the previous one with the fields seen so far', () => {
    const fields = [
      { fieldname: 'customer', fieldtype: 'Data' },
      { fieldname: 'tab1', fieldtype: 'Tab Break', label: 'Tab 1' },
      { fieldname: 'item', fieldtype: 'Data' },
    ];

    const tabs = groupFields(fields);

    expect(tabs.map(t => t.tabName)).toEqual(['initial_tab', 'tab1']);
    expect(tabs[0].sections[0].columns[0].fields.map(f => f.fieldname)).toEqual(['customer']);
    expect(tabs[1].sections[0].columns[0].fields.map(f => f.fieldname)).toEqual(['item']);
  });

  it('starts a new section within the same tab on Section Break', () => {
    const fields = [
      { fieldname: 'a', fieldtype: 'Data' },
      { fieldname: 'section1', fieldtype: 'Section Break', label: 'Section 1' },
      { fieldname: 'b', fieldtype: 'Data' },
    ];

    const tabs = groupFields(fields);

    expect(tabs).toHaveLength(1);
    expect(tabs[0].sections).toHaveLength(2);
    expect(tabs[0].sections[0].columns[0].fields.map(f => f.fieldname)).toEqual(['a']);
    expect(tabs[0].sections[1].sectionName).toBe('section1');
    expect(tabs[0].sections[1].columns[0].fields.map(f => f.fieldname)).toEqual(['b']);
  });

  it('starts a new column within the same section on Column Break', () => {
    const fields = [
      { fieldname: 'a', fieldtype: 'Data' },
      { fieldname: 'col1', fieldtype: 'Column Break' },
      { fieldname: 'b', fieldtype: 'Data' },
    ];

    const tabs = groupFields(fields);

    expect(tabs[0].sections[0].columns).toHaveLength(2);
    expect(tabs[0].sections[0].columns[0].fields.map(f => f.fieldname)).toEqual(['a']);
    expect(tabs[0].sections[0].columns[1].fields.map(f => f.fieldname)).toEqual(['b']);
  });

  it('drops empty columns/sections/tabs produced by consecutive breaks with no fields between them', () => {
    const fields = [
      { fieldname: 'section1', fieldtype: 'Section Break' },
      { fieldname: 'col1', fieldtype: 'Column Break' },
      { fieldname: 'tab1', fieldtype: 'Tab Break' },
      { fieldname: 'a', fieldtype: 'Data' },
    ];

    const tabs = groupFields(fields);

    expect(tabs).toHaveLength(1);
    expect(tabs[0].tabName).toBe('tab1');
  });
});
