import * as nextRouter from "next/router";

const PageProvider = ({ children, pathname }) => {
  nextRouter.useRouter = jest.fn();
  nextRouter.useRouter.mockImplementation(() => ({
    pathname,
    push: jest.fn(),
  }));

  return children;
};

module.exports = { PageProvider };
