import renderer from 'react-test-renderer';
import AboutPage from '../../pages/AboutPage';

test('Renders About Page and checks against snapshot', ()=> {
    const pageRender = renderer.create(<AboutPage />).toJSON();
    expect(pageRender).toMatchSnapshot();
})