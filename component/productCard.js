/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} key={product.id}>
      <a>
        <div className="border border-black-200 shadow-md p-6">
          <img src="https://metrocolombiafood.vteximg.com.br/arquivos/ids/162561-1000-1000/7702168214000-1.jpg?v=636670257117800000" className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="">
          </img>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      </a>
    </Link>
  );
}


