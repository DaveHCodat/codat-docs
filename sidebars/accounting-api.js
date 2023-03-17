module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "link",
    label: "Accounting API",
    href: "/accounting-api/overview",
    className: "header",
  },
  {
    type: "category",
    label: "Guides",
    collapsed: true,
    items: [
      {
        type: "category",
        label: "Invoice finance lending",
        collapsed: true,
        items: [
          "accounting-api/guides/invoice-finance/introduction",
          "accounting-api/guides/invoice-finance/setting-up",
          "accounting-api/guides/invoice-finance/process-invoice",
          "accounting-api/guides/invoice-finance/inv-fin-decision",
        ],
      },  
    ],
  },
  {
    type: "link",
    label: "Accounting data model",
    href: "/data-model/accounting/",
  },
  {
    type: "link",
    label: "Accounting integrations",
    href: "/integrations/accounting/overview",
  },
  {
    type: "link",
    href: "/accounting-api",
    label: "Accounting API reference",
  },
];