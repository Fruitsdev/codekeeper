import { Component } from '@angular/core';

type JsNavItem = {
  title: string;
  path: string;
  icon: string; // ✅ added
};

type JsNavGroup = {
  groupTitle: string;
  items: JsNavItem[];
};

@Component({
  selector: 'app-javascript',
  standalone: false,
  templateUrl: './javascript.html',
  styleUrl: './javascript.scss',
})
export class Javascript {
  navGroups: JsNavGroup[] = [
    {
      groupTitle: 'Basics',
      items: [
        { title: 'Intro', path: 'intro', icon: 'info' },
        { title: 'Comments', path: 'comments', icon: 'comment' },
        { title: 'Variables', path: 'variables', icon: 'variable_add' },
        { title: 'Data Types', path: 'datatypes', icon: 'data_object' },
        { title: 'Operators', path: 'operators', icon: 'calculate' },
        { title: 'Conditionals', path: 'conditionals', icon: 'rule' },
        { title: 'Loops', path: 'loops', icon: 'repeat' },
        { title: 'Functions', path: 'functions', icon: 'functions' },
        { title: 'Arrays', path: 'array', icon: 'view_list' },
        { title: 'Objects', path: 'objects', icon: 'inventory_2' },
      ],
    },
    {
      groupTitle: 'Core Concepts',
      items: [
        { title: 'Template Literals', path: 'template-literals', icon: 'text_fields' },
        { title: 'Conversion & Coercion', path: 'conversion-coercion', icon: 'swap_horiz' },
        { title: 'Truthy & Falsy', path: 'truthy-falsy', icon: 'check_circle' },
        { title: 'Equality Operator', path: 'equality-operator', icon: 'balance' },
        { title: 'Statements & Expressions', path: 'statements-expressions', icon: 'article' },
        { title: 'prompt()', path: 'prompt', icon: 'keyboard' },
        { title: 'If Else', path: 'if-else', icon: 'account_tree' },
        { title: 'Switch Case', path: 'switch', icon: 'toggle_on' },
      ],
    },
    {
      groupTitle: 'Advanced',
      items: [
        { title: 'What is JS?', path: 'what-is-js', icon: 'psychology' },
        { title: 'this keyword', path: 'this-keyword', icon: 'target' },
        { title: 'Regular vs Arrow Function', path: 'arrow-function', icon: 'trending_flat' },
        { title: 'Primitive vs Object', path: 'primitive-vs-object', icon: 'layers' },
      ],
    },
  ];
}