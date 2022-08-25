module.exports = function (/** @type {import('plop').NodePlopAPI} */ plop) {
  const componentsBasePath = '../src/components/{{pascalCase name}}'

  plop.setGenerator('components', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: `${componentsBasePath}/__tests__/{{pascalCase name}}.tsx`,
        templateFile: 'templates/components/__tests__/index.tsx.hbs'
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
