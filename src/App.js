import PaintingList from './components/PaintingList';
import paintings from './painting.json';
// import Section from './components/Section';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Alert from './components/Alert/Alert';
import Container from './components/Container/Container';
import Box from './components/Box/Box';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F5185' },
];

export default function App() {
  // const isOnline = ''; //переменная условия
  return (
    <div>
      <Container>
        {/* {isOnline && 'Online'} */}
        {/* если  isOnline = true, то отренднрится строка "Online" */}
        {/* {isOnline ? 'Online' : 'Offline'} */}
        {/* если  isOnline = true, то отренднрится строка "Online", если  isOnline = false, то отренднрится строка "Offline" */}
        {/* <Section title="Top 7"> */}
        <ColorPicker options={colorPickerOptions} />
        <PaintingList items={paintings} />
        <Alert text="давай по новой" type="success" />
        <Alert text="давай по новой" type="error" />
        <Alert text="давай по новой" type="warning" />

        {/*PaintingList - clidren для Section*/}
        {/* </Section> */}
        {/* <Section /> */}
      </Container>
      <Box type="sm" classNames="big red" />
      <Box type="md" />
      <Box type="lg" />
    </div>
  );
}
