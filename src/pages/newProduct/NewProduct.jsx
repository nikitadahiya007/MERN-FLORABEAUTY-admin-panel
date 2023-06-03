import { useState } from "react";
import "./newProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/apiCalls";
import axios from "axios";
export default function NewProduct() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  const [pic, setPic] = useState(null);
  const [cat, setCat] = useState([]);
  const [color, setColor] = useState([]);
  const postDetails = (pics) => {
    // pics.preventDefault();

    if (pics === undefined) {
      console.log("select again");
      return;
    }
    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/webp" ||
      pics.type === "image/png"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "eccoommers");
      data.append("cloud_name", "ds4rnuy51");
      fetch("https://api.cloudinary.com/v1_1/ds4rnuy51/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("select an image");
    }
  };
  const handleChange = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  // console.log(input);
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };
  const handleColor = (e) => {
    setColor(e.target.value.split(","));
  };

  // const handleClick = (e) => {
  //  ()=>{
  //   e.preventDefault();
  //   const product = { ...input, img: pic, categories: cat, color: color };
  //   addProduct(product, dispatch);
  //   console.log(product);
  //  }
  // };

  const handleClick = async (e) => {
    e.preventDefault();
    if (!input || !pic) {
      console.log("fill mandatory fields");
      
      return;
    }

    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/products",
        { ...input, img: pic, categories: cat, color: color },
        config
      );

      console.log(data);
      console.log("product created success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={(e) => postDetails(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Apple Airpods"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder="price"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input
            type="text"
            name=""
            placeholder="Categories"
            onChange={handleCat}
          />
        </div>
        <div className="addProductItem">
          <label>colors</label>
          <input
            onChange={handleColor}
            type="text"
            name=""
            placeholder="colors"
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            onChange={handleChange}
            name="desc"
            placeholder="description"
          />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </div>

        <button className="addProductButton" onClick={handleClick}>
          Create
        </button>
      </form>
    </div>
  );
}
