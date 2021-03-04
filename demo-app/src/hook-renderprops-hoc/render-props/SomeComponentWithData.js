import SomeComponent from './SomeComponent';
import SomeData from './SomeData';

const SomeComponentWithSomeData = (props) => (
    <SomeData>
      {renderProps => (<SomeComponent someData={renderProps.someData} loading={renderProps.loading} error={renderProps.error} />)}
    </SomeData>
  );

  export default SomeComponentWithSomeData;