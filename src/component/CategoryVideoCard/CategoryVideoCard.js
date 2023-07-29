import { categories } from "../../db/data";
import "./category-video-card.css";

export default function CatgeoryVideoCard(video) {
  const { title, views, thumbnail, category, creator } = video;
  const categoryDetail = categories.find(
    (singleCategory) => singleCategory.category === category
  );
  return (
    <div className="card-main">
      <div className="video-cover">
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div className="video-desc">
        <div className="category-thumbnail">
          <img src={categoryDetail.thumbnail} alt="catgeory-thumbnail" />
        </div>
        <div className="desc">
          <div className="title">
            <span>{title}</span>
          </div>
          <div className="title">
            <span>{category}</span>
          </div>
          <div className="views">
            <span>
              {views} views | {creator}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
