import Post from "../post/Post";
import "./posts.css";

export const data = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/6988608/pexels-photo-6988608.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description:
      "orem ipsum dolor sit amet consectetur, adipisicing elit. Vel,repellat architecto perferendis reiciendis modi laborum, incidunt vero iste, illum animi ipsum et voluptas. Laboriosam eos",
    path: "item_1",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1667506057188-3dc8aba0b1d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,repellat architecto perferendis reiciendis modi laborum, incidunt vero iste, illum animi ipsum et voluptas. Laboriosam eos",
    path: "item_2",
  },
  {
    id: 3,
    key: 3,
    image:
      "https://images.unsplash.com/photo-1666855281847-43a68297f42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    description:
      "orem ipsum dolor sit amet consectetur, adipisicing elit. Vel,repellat architecto perferendis reiciendis modi laborum, incidunt vero iste, illum animi ipsum et voluptas. Laboriosam eos",
    path: "/item_3",
  },
  {
    image:
      "https://images.unsplash.com/photo-1664575197593-2e7085ef086b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione quia alias excepturi repellendus aliquam facere sit, quidem animi voluptatem.",
    path: "/item_4",
    id: 4,
  },
  {
    image:
      "https://images.unsplash.com/photo-1666858828359-06158e466cc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse necessitatibus eligendi fuga consequatur. Asperiores aspernatur assumenda minus error nisi, in veniam laudantium nam voluptatem quis, perspiciatis recusandae sunt ipsum praesentium atque! Inventore!",
    path: "/item_5",
    id: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1666884558195-f2da8a42f7c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis commodi maiores, ad minima similique mollitia labore aliquam asperiores repudiandae quod.",
    path: "/item_6",
    id: 6,
  },
  {
    image:
      "https://images.unsplash.com/photo-1667506056308-818e42df4971?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, quos aliquam. Fuga, earum doloribus voluptatibus distinctio culpa quam accusantium quas molestiae, ducimus, perspiciatis odio blanditiis exercitationem a harum neque fugiat. Omnis numquam autem vero rem distinctio commodi quo excepturi?",
    path: "/item_7",
    id: 7,
  },
  {
    image:
      "https://images.pexels.com/photos/13458913/pexels-photo-13458913.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, quos aliquam. Fuga, earum doloribus voluptatibus distinctio culpa quam accusantium quas molestiae, ducimus, perspiciatis odio blanditiis exercitationem a harum neque fugiat. Omnis numquam autem vero rem distinctio commodi quo excepturi?",
    path: "/item_8",
    id: 8,
  },
];

export default function Posts() {
  return (
    <div className="posts">
      {data.map((item, index) => {
        return (
          <Post key={index} image={item.image} descrip={item.description} />
        );
      })}
    </div>
  );
}
