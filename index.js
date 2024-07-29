import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.5.0.min.js";
import { pedidos } from "./data/pedidos.js";
import { VisorPedidos } from "./components/VisorPedidos.js";
const { button, div, li, span, input } = van.tags;

const Items = () => {
  const viso_items = div();
  const agregar = () => van.add(viso_items, Item(text.val));
  const btnagregar = button({ onclick: agregar }, "agregar");
  const text = van.state("");
  const nuevoPedidoInput = input({
    type: "text",
    value: text,
    oninput: (e) => (text.val = e.target.value),
  });
  return div(nuevoPedidoInput, btnagregar, viso_items);
};

const Item = (texto) => {
  const counter = van.state(0);
  const add = button({ onclick: () => ++counter.val }, "➕");
  const sub = button(
    { onclick: () => (counter.rawVal > 0 ? --counter.val : 0) },
    "➖"
  );
  const del = button({ onclick: () => dom.remove() }, "❌");
  const dom = li(span(add, sub, " ", counter, " ", del, " ", texto));

  return dom;
};
van.add(document.body, [VisorPedidos(pedidos), Items()],);