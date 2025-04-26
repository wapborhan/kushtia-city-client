const DashFooter = () => {
  return (
    <>
      <footer className="mt-1">
        <div
          className="credit bottom-0 w-full text-center text-white py-10 px-40 flex justify-between gap-5"
          style={{ background: "var(--theme-color)" }}
        >
          <div>
            Copyright © {new Date().getFullYear()} . All Rights Reserved.
          </div>
          <div>
            Developed by{" "}
            <a
              href="http://www.srdreamlab.com"
              target="__BLANK"
              className="text-white"
            >
              SR Dream Lab
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default DashFooter;
