const atomicDesignLayers = [
  {
    name: 'Atom',
    value: 'atoms'
  },
  {
    name: 'Molecule',
    value: 'molecules'
  },
  {
    name: 'Organism',
    value: 'organism'
  },
  {
    name: 'Template',
    value: 'template'
  }
]

const componentsBasePath =
  '../src/components/{{component_type}}/{{pascalCase name}}'

module.exports = function (/** @type {import('plop').NodePlopAPI} */ plop) {
  plop.setGenerator('components', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      },
      {
        type: 'list',
        name: 'component_type',
        choices: atomicDesignLayers
      }
    ],
    actions: [
      {
        type: 'add',
        path: `${componentsBasePath}/index.ts`,
        skipIfExists: true
      },
      {
        type: 'add',
        path: `${componentsBasePath}/__tests__/{{pascalCase name}}.tsx`,
        templateFile: 'templates/components/__tests__/index.tsx.hbs',
        force: true
      },
      {
        type: 'add',
        path: `${componentsBasePath}/index.tsx`,
        templateFile: 'templates/components/index.tsx.hbs'
      },
      {
        type: 'add',
        path: `${componentsBasePath}/style.tsx`,
        templateFile: 'templates/components/style.tsx.hbs'
      }
    ]
  })
}
