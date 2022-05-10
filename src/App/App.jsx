import SearchInfo from '../Services/SearchInfo';
import { ScrollToTop } from 'react-to-top';
const App = () => {
  return (
    <>
      <SearchInfo />
      <ScrollToTop
        bgColor="#32a8a4"
        size={60}
        strokeWidth={2}
        symbolSize={25}
      />
    </>
  );
};
export default App;
