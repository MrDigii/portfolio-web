import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Skills from '@/components/sections/Skills';

const meta = {
    title: 'Sections/Skills',
    component: Skills,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Skills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Darin bin ich gut...',
        items: [
            {
                title: 'Webentwicklung',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
            },
            {
                title: 'SaaS Entwicklung',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
            },
            {
                title: 'Kommunikation',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
            },
        ],
    },
};

export const WithTools: Story = {
    args: {
        title: 'Darin bin ich gut...',
        items: [
            {
                title: 'Webentwicklung',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
            },
            {
                title: 'SaaS Entwicklung',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
            },
            {
                title: 'Kommunikation',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
            },
        ],
        tools: [
            {
                logo: {
                    src: '/images/tools/MobX.svg',
                    alt: 'MobX Logo',
                    width: 60,
                    height: 60,
                },
                name: 'MobX',
            },
            {
                logo: {
                    src: '/images/tools/HTML.svg',
                    alt: 'HTML5 Logo',
                    width: 60,
                    height: 60,
                },
                name: 'HTML5',
            },
            {
                logo: {
                    src: '/images/tools/Grunt.svg',
                    alt: 'Grunt Logo',
                    width: 45,
                    height: 60,
                },
                name: 'Grunt',
            },
            {
                logo: {
                    src: '/images/tools/Nodejs.svg',
                    alt: 'Node.js Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Node.js',
            },
            {
                logo: {
                    src: '/images/tools/Expressjs.svg',
                    alt: 'Express.js Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Express.js',
            },
            {
                logo: {
                    src: '/images/tools/GraphQL.svg',
                    alt: 'GraphQL Logo',
                    width: 60,
                    height: 60,
                },
                name: 'GraphQL',
            },
            {
                logo: {
                    src: '/images/tools/PHP.svg',
                    alt: 'PHP Logo',
                    width: 60,
                    height: 60,
                },
                name: 'PHP',
            },
            {
                logo: {
                    src: '/images/tools/ModX.svg',
                    alt: 'ModX Logo',
                    width: 60,
                    height: 60,
                },
                name: 'ModX',
            },
            {
                logo: {
                    src: '/images/tools/Wordpress.svg',
                    alt: 'Wordpress Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Wordpress',
            },
            {
                logo: {
                    src: '/images/tools/PayloadCMS.svg',
                    alt: 'Payload CMS Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Payload CMS',
            },
            {
                logo: {
                    src: '/images/tools/PostgreSQL.svg',
                    alt: 'PostgreSQL Logo',
                    width: 60,
                    height: 60,
                },
                name: 'PostgreSQL',
            },
            {
                logo: {
                    src: '/images/tools/Github.svg',
                    alt: 'Github Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Github',
            },
            {
                logo: {
                    src: '/images/tools/Typescript.svg',
                    alt: 'Typescript Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Typescript',
            },
            {
                logo: {
                    src: '/images/tools/Nextjs.svg',
                    alt: 'Next.js Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Next.js',
            },
            {
                logo: {
                    src: '/images/tools/Javascript.svg',
                    alt: 'Javascript Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Javascript',
            },
            {
                logo: {
                    src: '/images/tools/Tailwind.svg',
                    alt: 'Tailwind CSS Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Tailwind CSS',
            },
            {
                logo: {
                    src: '/images/tools/CSS.svg',
                    alt: 'CSS Logo',
                    width: 60,
                    height: 60,
                },
                name: 'CSS',
            },
            {
                logo: {
                    src: '/images/tools/Sass.svg',
                    alt: 'Sass Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Sass',
            },
            {
                logo: {
                    src: '/images/tools/Reactjs.svg',
                    alt: 'React.js Logo',
                    width: 60,
                    height: 60,
                },
                name: 'React.js',
            },
            {
                logo: {
                    src: '/images/tools/Redux.svg',
                    alt: 'Redux Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Redux',
            },
        ],
    },
};

export const WithBackground: Story = {
    args: {
        background: 'medium',
        title: 'Darin bin ich gut...',
        items: [
            {
                title: 'Webentwicklung',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
            },
            {
                title: 'SaaS Entwicklung',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
            },
            {
                title: 'Kommunikation',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
            },
        ],
        tools: [
            {
                logo: {
                    src: '/images/tools/MobX.svg',
                    alt: 'MobX Logo',
                    width: 60,
                    height: 60,
                },
                name: 'MobX',
            },
            {
                logo: {
                    src: '/images/tools/HTML.svg',
                    alt: 'HTML5 Logo',
                    width: 60,
                    height: 60,
                },
                name: 'HTML5',
            },
            {
                logo: {
                    src: '/images/tools/Grunt.svg',
                    alt: 'Grunt Logo',
                    width: 45,
                    height: 60,
                },
                name: 'Grunt',
            },
            {
                logo: {
                    src: '/images/tools/Nodejs.svg',
                    alt: 'Node.js Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Node.js',
            },
            {
                logo: {
                    src: '/images/tools/Expressjs.svg',
                    alt: 'Express.js Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Express.js',
            },
            {
                logo: {
                    src: '/images/tools/GraphQL.svg',
                    alt: 'GraphQL Logo',
                    width: 60,
                    height: 60,
                },
                name: 'GraphQL',
            },
            {
                logo: {
                    src: '/images/tools/PHP.svg',
                    alt: 'PHP Logo',
                    width: 60,
                    height: 60,
                },
                name: 'PHP',
            },
            {
                logo: {
                    src: '/images/tools/ModX.svg',
                    alt: 'ModX Logo',
                    width: 60,
                    height: 60,
                },
                name: 'ModX',
            },
            {
                logo: {
                    src: '/images/tools/Wordpress.svg',
                    alt: 'Wordpress Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Wordpress',
            },
            {
                logo: {
                    src: '/images/tools/PayloadCMS.svg',
                    alt: 'Payload CMS Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Payload CMS',
            },
            {
                logo: {
                    src: '/images/tools/PostgreSQL.svg',
                    alt: 'PostgreSQL Logo',
                    width: 60,
                    height: 60,
                },
                name: 'PostgreSQL',
            },
            {
                logo: {
                    src: '/images/tools/Github.svg',
                    alt: 'Github Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Github',
            },
            {
                logo: {
                    src: '/images/tools/Typescript.svg',
                    alt: 'Typescript Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Typescript',
            },
            {
                logo: {
                    src: '/images/tools/Nextjs.svg',
                    alt: 'Next.js Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Next.js',
            },
            {
                logo: {
                    src: '/images/tools/Javascript.svg',
                    alt: 'Javascript Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Javascript',
            },
            {
                logo: {
                    src: '/images/tools/Tailwind.svg',
                    alt: 'Tailwind CSS Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Tailwind CSS',
            },
            {
                logo: {
                    src: '/images/tools/CSS.svg',
                    alt: 'CSS Logo',
                    width: 60,
                    height: 60,
                },
                name: 'CSS',
            },
            {
                logo: {
                    src: '/images/tools/Sass.svg',
                    alt: 'Sass Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Sass',
            },
            {
                logo: {
                    src: '/images/tools/Reactjs.svg',
                    alt: 'React.js Logo',
                    width: 60,
                    height: 60,
                },
                name: 'React.js',
            },
            {
                logo: {
                    src: '/images/tools/Redux.svg',
                    alt: 'Redux Logo',
                    width: 60,
                    height: 60,
                },
                name: 'Redux',
            },
        ],
    },
};
