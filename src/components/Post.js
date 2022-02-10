import React from "react";
import {Grid, Image, Text} from "../elements";

const Post = (props) => {
  
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex>
            <Image shape="circle" src={props.src}/>
            <Text bold>{props.user_info.user_name}</Text>
            <Text>{props.insert_dt}</Text>
        </Grid>
        <Grid padding="16px">
            <Text>{props.contents}</Text>

        </Grid>
        <Grid>
            <Image shape="rectangle" src={props.src}/>
        </Grid>
        <Grid padding="16px">
            <Text bold>댓글 {props.comment_cnt}개</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "sojh",
    user_profile:
      "https://firebasestorage.googleapis.com/v0/b/sparta-megazine.appspot.com/o/images%2FLyeXJ0Jc7DUXC41XgbOfWsG89d92_1644232036321?alt=media&token=474d12bf-b7fc-43e4-9464-f0a98a001c64",
  },
  image_url:
    "https://firebasestorage.googleapis.com/v0/b/sparta-megazine.appspot.com/o/images%2FLyeXJ0Jc7DUXC41XgbOfWsG89d92_1644232036321?alt=media&token=474d12bf-b7fc-43e4-9464-f0a98a001c64",
  contents: "정서진!",
  comment_cnt: 10,
  insert_dt: "2022-02-07 10:00:00",
};

export default Post;
