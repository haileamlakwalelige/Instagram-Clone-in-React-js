import "../styles/stories.scss";
import Story from "./Story";
import HorizontalScroll from 'react-horizontal-scrolling';
function Stories() {
  return (
    <div className="stories">
      <HorizontalScroll className="scroll" reverseScroll={true} scroll={true}>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </HorizontalScroll>
    </div>
  );
}

export default Stories;
