import React from 'react'
import { Button, Comment, Form,  } from 'semantic-ui-react'

const CommentForm = () => (
  <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src="https://scontent.fcmh1-1.fna.fbcdn.net/v/t1.0-9/68873776_10216816860788339_4611587856949837824_n.jpg?_nc_cat=101&_nc_oc=AQmVFefkiy0Ysxmr2Vqq_ePlI7brJhSxTTgfv9IrpV44NdiwwBv9s-lGFJc2HWWirwM&_nc_ht=scontent.fcmh1-1.fna&oh=03e82bfa6b492d1a96022beff1a26dd2&oe=5E1C517B" />
      <Comment.Content>
        <Comment.Author as='a'>Stephen Hawking</Comment.Author>
        <Comment.Metadata>
          <div>2 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Revolutionary!</Comment.Text>
        <Comment.Actions>
          <Comment.Action active>Reply</Comment.Action>
        </Comment.Actions>
        <Form reply>
          <Form.TextArea />
          <Button
            content='Add Reply'
            labelPosition='left'
            icon='edit'
            primary
          />
        </Form>
      </Comment.Content>
    </Comment>
  </Comment.Group>
)

export default CommentForm;