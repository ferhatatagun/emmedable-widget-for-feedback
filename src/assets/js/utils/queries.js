export const ForId_Feedback_polls_Query = `
  query ForId_Feedback_polls($id: uuid) {
    feedback_polls(where: {id: {_eq: $id}}) {
      updated_at
      user_id
      type
      title
      status
      start_date
      slug
      poll
      id
      end_date
      created_at
      comment
      is_deleted
    }
  }
`;
