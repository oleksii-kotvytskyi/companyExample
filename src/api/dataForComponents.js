const headerItems = [ 'About Us', 'What We Do', 'Jobs', 'Contact Us' ];
const text = 'I am a very simple card. I am good at containing small bits of information';
const whatWeDoInf = [{
    tittle: 'Web Application',
    content: text,
    icon: 'js'
}, {
    tittle: 'Full application development circle',
    content: text,
    icon: 'sync',
    color: 'green'
}, {
    tittle: 'Plugins and Extensions',
    content: text,
    icon: 'gem'
}, {
    tittle: 'Support',
    content: text,
    icon: 'phone',
    color: 'green'
}, {
    tittle: 'Prototype',
    content: text,
    icon: 'js',
    color: 'black'
}, {
    tittle: 'Frontend',
    content: text,
    icon: 'react',
    color: 'blue'
}, {
    tittle: 'Backend',
    content: text,
    icon: 'php',
    color: 'violet'
}];
const aboutUsInf = {
    content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur assumenda consequatur\n' +
        'corporis cumque distinctio doloremque doloribus esse excepturi fugiat id impedit iusto, magni\n' +
        'quidem sequi similique vel vitae. A adipisci aliquam aspernatur atque cum, dicta dolor dolore\n' +
        'enim excepturi exercitationem facilis ipsa laborum magnam magni molestias nam nesciunt nihil\n' +
        'odit porro provident quae quo repellendus rerum sed ullam voluptatibus, voluptatum. Adipisci\n' +
        'aliquam at dolore, esse maxime mollitia omnis quam repudiandae sed similique soluta unde velit.\n' +
        'Accusamus accusantium adipisci asperiores blanditiis consectetur culpa dolorem doloremque\n' +
        'dolores doloribus excepturi facilis harum hic impedit laboriosam maxime modi nesciunt officia\n' +
        'optio pariatur quibusdam recusandae, repellendus reprehenderit, repudiandae saepe sapiente\n' +
        'soluta suscipit vel vero voluptatibus voluptatum. Doloremque expedita in reiciendis! Alias\n' +
        'assumenda beatae, commodi consequuntur debitis doloribus ducimus error esse eum fuga in iure,\n' +
        'labore magnam nam nemo, nihil nisi nulla odio officia omnis perspiciatis repellat repellendus\n' +
        'reprehenderit suscipit velit. Ad aut deleniti deserunt dicta dolores ea ex harum in inventore,\n' +
        'laborum magni nemo nisi nobis placeat provident quaerat repudiandae! Ab adipisci alias aperiam\n' +
        'aspernatur dicta dolorem doloribus ducimus fugit iure laudantium minus nostrum odit possimus,\n' +
        'praesentium provident quam quod reiciendis saepe suscipit veritatis vitae voluptas voluptatem.\n' +
        'Blanditiis fugit ipsam neque officiis saepe totam.',
    photo0: {
        src: 'https://seeklogo.com/images/F/flat-man-icon-logo-A0FEC16B6D-seeklogo.com.png',
        fullName: 'Aleksey Kotvitsky',
        roll: 'React Developer'
    },

    photo1: {
        src: 'https://icon-library.net/images/woman-icon/woman-icon-8.jpg',
        fullName: 'Oksana Palamarchuk ',
        roll: 'Business Analytic'
    },
    photo2: {
        src: 'https://seeklogo.com/images/F/flat-man-icon-logo-A0FEC16B6D-seeklogo.com.png',
        fullName: 'Oleg Werdffelynir',
        roll: 'Full Stack Developer'
    }
};
const jobsInf = [
    {
        roll: 'Full Stack Developer',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque consectetur consequuntur dicta' +
            ' dolor ea, eos inventore, magni nemo pariatur, perferendis praesentium quaerat quam quibusdam quos tempora ' +
            'voluptate! Officia, tempora.'
    },
    {
        roll: 'JavaScript Developer',
        content: 'Containing small bits of information. Convenient because I require little markup to use effectively.\n' +
            '\n' +
            'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
    },
    {
        roll: 'Sales Manager',
        content: 'Good at containing small bits of information. Very simple card. I am convenient because I require little markup to use effectively.\n' +
            '\n' +
            'Containing small bits of information. Convenient because I require little markup to use effectively.'
    }];

export {
    headerItems,
    aboutUsInf,
    whatWeDoInf,
    jobsInf
};