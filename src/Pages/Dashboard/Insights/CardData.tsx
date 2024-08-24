import { useParams } from 'react-router-dom';
import CardDetails from '../../../Components/CardDetails/CardDetails';
import { insightsData } from './Data';
import Footer from '../../Footer/Footer';



const CardData: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const data = insightsData.find((insight) => insight.id === Number(id));

  if (!data) {
    return <div>Insight not found.</div>;
  }

  return (
          <>
            <CardDetails data={data} />
            <Footer />
          </>
  );
  
};

export default CardData;