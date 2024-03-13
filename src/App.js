
import Title from './title/Title';
import About from './about/About';

const App = () => {
  const titleData = {
    title: 'Welcome to My Website',
    subtitle: 'Explore and Enjoy!'
  };

  const aboutData = {
    title: 'About Us',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor consequat mi, sit amet elementum neque pulvinar nec. Integer dapibus ante id nulla finibus tristique.',
    link: '/about'
  };

  return (
    <div>
      <Title {...titleData} />
      <About {...aboutData} />
    </div>
  );
};

export default App;