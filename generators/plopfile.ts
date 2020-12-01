import {NodePlopAPI} from 'plop';

export default function (plop: NodePlopAPI) {
    plop.setGenerator('basics', {
        description: 'this is a skeleton plopfile',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name pls'
        }],
        actions: [
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/index.tsx',
                templateFile: './templates/createComponent.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/stories.tsx',
                templateFile: './templates/createStories.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/styles.tsx',
                templateFile: './templates/createStyles.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/test.tsx',
                templateFile: './templates/createTest.hbs'
            }
        ]
    });
};
