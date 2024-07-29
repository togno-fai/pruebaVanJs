import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.5.0.min.js";
const { button, div, input } = van.tags;
const seleccionado = van.state(-1);

const Pedido = (pedido, i) => {
  return div(
    {
      onclick: () => (seleccionado.val = seleccionado.val == i ? -1 : i),
      class: () => `pedido${seleccionado.val == i ? " seleccionado" : ""}`,
    },
    div(
      { class: "info" },
      div({ class: "key" }, pedido.key),
      div({ class: "total" }, "$", pedido.total),
      div({ class: "direccion" }, "🏍️", pedido.direccion),
      div({ class: "contacto" }, "📞", pedido.contacto),
      div({ class: "detalles" }, pedido.detalles)
    ),
    div(
      { class: "estado" },
      div({ class: "asignado" }, "🥸", pedido.asignado),
      div({ class: "progreso" }, pedido.progreso)
    )
  );
};
const EditorPedidos = () => {
  return div(
    { class: "editorPedido" },
    div("direccion"),
    input(),
    div("contacto"),
    input(),
    div("detalles"),
    input()
  );
};
export const VisorPedidos = (pedidos) => {
  return div(
    () => `seleccionado: ${seleccionado.val}`,
    div(
      { style: "display: flex" },
      div(pedidos.map((e, i) => Pedido(e, i))),
      EditorPedidos()
    )
  );
};
