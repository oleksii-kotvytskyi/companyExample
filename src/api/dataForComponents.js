const headerItems = [ 'About_Us', 'What_We_Do', 'Jobs' ];
const text = 'I am a very simple card. I am good at containing small bits of information';
const whatWeDoInf = [{
    tittle: 'Prototype',
    content: text,
    icon: 'sitemap',
    color: 'black'
}, {
    tittle: 'Design',
    content: text,
    icon: 'sync',
    color: 'green'
}, {
    tittle: 'Backend',
    content: text,
    icon: 'php',
    color: 'violet'
}, {
    tittle: 'Frontend',
    content: text,
    icon: 'react',
    color: 'blue'
}, {
    tittle: 'Plugins and Extensions',
    content: text,
    icon: 'gem'
}];
const aboutUsInf = {
    content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur assumenda consequatur\n' +
        'corporis cumque distinctio doloremque doloribus esse excepturi fugiat id impedit iusto, magni\n' +
        'quidem sequi similique vel vitae. A adipisci aliquam aspernatur atque cum, dicta dolor dolore\n' +
        'enim excepturi exercitationem facilis ipsa laborum magnam magni molestias nam nesciunt nihil\n' +
        'odit porro provident quae quo repellendus rerum sed ullam voluptatibus, voluptatum. Adipisci\n' +
        'aliquam at dolore, esse maxime mollitia omnis quam repudiandae sed similique soluta unde velit.\n' +
        'Accusamus accusantium adipisci asperiores blanditiis consectetur culpa dolorem doloremque',
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