import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5051;
const databaseURL = ``;
const databaseURL_2 = ``;
const databaseURL_3 = ``;

const JWT_SECRET_KEY = "EXPENSE_TRACKER_apurboroy7077@gmail.com";
const SUB_ADDRESS_OF_UPLOAD_PRODUCTS_API = "/products/upload/api";
const firebaseConfig = {
  apiKey: "AIzaSyDtMentULJpS0aG4F1aOZJDXeGQa9EjWM4",
  authDomain: "weaponizear7.firebaseapp.com",
  projectId: "weaponizear7",
  storageBucket: "weaponizear7.appspot.com",
  messagingSenderId: "228513748912",
  appId: "1:228513748912:web:60b17d70f8ab5fbd52a875",
  measurementId: "G-ML16TT1Y1L",
};
const SUB_ADDRESS_OF_GETTING_RANDOM_PRODUCTS_API =
  "/products/get-random-products/api";
const SUB_ADDRESS_OF_GETTING_SELLER_DETAILS_FOR_CLIENT_SIDE_API =
  "/authentication/get-seller-details-for-client-side/api";
const SUB_ADDRESS_OF_LIKE_SOMETHING_API = "/user-activity/like/api";
const SUB_ADDRESS_OF_CHECKING_LIKE_API = "/user-activity/check-like/api";
const SUB_ADDRESS_OF_DISLIKING_SOMETHING_API = "/user-activity/dislike/api";
const SUB_ADDRESS_OF_GETTING_TOTAL_NUMBER_OF_LIKES_API =
  "/user-activity/get-total-number-of-likes/api";
const SUB_ADDRESS_OF_FOLLOW_SOMEONE_API = "/user-activity/follow-someone/api";
const SUB_ADDRESS_OF_UNFOLLOW_SOMEONE_API =
  "/user-activity/unfollow-someone/api";
const SUB_ADDRESS_OF_GETTING_TOTAL_NUMBERS_OF_FOLLOWERS_OF_A_SUBJECT_API =
  "/user-activity/get-total-number-of-followers-of-a-subject/api";
const SUB_ADDRESS_OF_MAKING_REPORT_API = "/user-activity/making-report/api";
const SUB_ADDRESS_OF_GIVING_COMMENT_API = "/user-activity/giving-comment/api";
const SUB_ADDRESS_OF_CHECKING_FOLLOWING_SOMETHING_OR_NOT_API =
  "/user-activity/checking-following-something-or-not/api";
const SUB_ADDRESS_OF_GETTING_USER_DETAILS_FOR_CLIENTS_API =
  "/authentication/getting-user-details-for-clients/api";
const SUB_ADDRESS_OF_GETTING_COMMENTS_OF_SOMETHING_API =
  "/user-activity/getting-comments-of-something/api";
const SUB_ADDRESS_OF_GIVING_PERMISSION_TO_SELL_API =
  "/admin/give-permission-to-sell/api";
const IMPONEXPO_SUPERUSER_KEY = "imponexpo-superuser-key-123";
const SUB_ADDRESS_OF_MAKING_SOMEONE_ADMIN_API = "/admin/make-someone-admin/api";
const SUB_ADDRESS_OF_BANNING_SOMEONE_API = "/admin/ban-someone/api";
const SUB_ADDRESS_OF_DELETING_PRODUCTS_BY_ADMIN_API =
  "/admin/delete-product/api";
const SUB_ADDRESS_OF_UNBANNING_SOMEONE_API = "/admin/unbanning-someone/api";
const SUB_ADDRESS_OF_APPROVING_PRODUCT_API = "/admin/approving-product/api";
const SUB_ADDRESS_OF_SEEING_USER_DETAILS_BY_ADMIN_API =
  "/admin/see-user-details/api";
const SUB_ADDRESS_OF_GETTING_REPORTS_MADE_BY_USER_API =
  "/admin/getting-reports-made-by-user/api";

export {
  PORT,
  databaseURL,
  databaseURL_2,
  databaseURL_3,
  JWT_SECRET_KEY,
  SUB_ADDRESS_OF_UPLOAD_PRODUCTS_API,
  firebaseConfig,
  SUB_ADDRESS_OF_GETTING_RANDOM_PRODUCTS_API,
  SUB_ADDRESS_OF_GETTING_SELLER_DETAILS_FOR_CLIENT_SIDE_API,
  SUB_ADDRESS_OF_LIKE_SOMETHING_API,
  SUB_ADDRESS_OF_CHECKING_LIKE_API,
  SUB_ADDRESS_OF_DISLIKING_SOMETHING_API,
  SUB_ADDRESS_OF_GETTING_TOTAL_NUMBER_OF_LIKES_API,
  SUB_ADDRESS_OF_FOLLOW_SOMEONE_API,
  SUB_ADDRESS_OF_UNFOLLOW_SOMEONE_API,
  SUB_ADDRESS_OF_GIVING_PERMISSION_TO_SELL_API,
  IMPONEXPO_SUPERUSER_KEY,
  SUB_ADDRESS_OF_MAKING_SOMEONE_ADMIN_API,
  SUB_ADDRESS_OF_BANNING_SOMEONE_API,
  SUB_ADDRESS_OF_DELETING_PRODUCTS_BY_ADMIN_API,
  SUB_ADDRESS_OF_UNBANNING_SOMEONE_API,
  SUB_ADDRESS_OF_APPROVING_PRODUCT_API,
  SUB_ADDRESS_OF_SEEING_USER_DETAILS_BY_ADMIN_API,
  SUB_ADDRESS_OF_MAKING_REPORT_API,
  SUB_ADDRESS_OF_GETTING_REPORTS_MADE_BY_USER_API,
  SUB_ADDRESS_OF_GIVING_COMMENT_API,
  SUB_ADDRESS_OF_GETTING_COMMENTS_OF_SOMETHING_API,
  SUB_ADDRESS_OF_GETTING_USER_DETAILS_FOR_CLIENTS_API,
  SUB_ADDRESS_OF_CHECKING_FOLLOWING_SOMETHING_OR_NOT_API,
  SUB_ADDRESS_OF_GETTING_TOTAL_NUMBERS_OF_FOLLOWERS_OF_A_SUBJECT_API,
};
