import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar:
      "https://img0.baidu.com/it/u=2868204709,2797019486&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    siteTitle: "祝启萱",
    gitee: "https://gitee.com/qixuan-zhu",
    qq: "2647699210",
    qqQrCode:
      "https://bpic.588ku.com/element_origin_min_pic/01/37/31/24573c46572f507.jpg",
    weixin: "15735112866",
    weixinQrCode:
      "https://bpic.588ku.com/element_origin_min_pic/01/37/31/24573c46572f507.jpg",
    mail: "2647699210@qq.com",
    icp: "黑ICP备17001719号",
    giteeName: "qixuan-zhu",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
