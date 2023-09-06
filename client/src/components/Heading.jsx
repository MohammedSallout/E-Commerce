import PropTypes from "prop-types";
import styled from "styled-components";

const HeadingStyle = styled.div`
h2 {
  font-size: 30px;
  font-weight: 500;
  padding: 80px 80px 0 80px;
  line-height: 30px;
  color: rgb(51, 51, 51);

  @media (max-width: 767px) {
    font-size: 24px;
    padding: 40px 20px 0 20px;
  }
}
`;

function Heading({ title }) {
  return (
    <HeadingStyle>
      <h2>{title}</h2>
    </HeadingStyle>
  );
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;
