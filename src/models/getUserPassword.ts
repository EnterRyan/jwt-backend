export const getUserPassword = async (userId: string): Promise<string | undefined>=>{
  const userList = [
    { id: "sang2351", pw: "$2b$12$jpr8pomZdx.WI5UZMywpgOaOeAZNKEtr9BRV9t5PtNbWPUY3FtHku"},
    { id: "kimsang231", pw: "$2b$12$4RCBax.wWJf.uPr1Ci7VDOKiV6TmEYD5DFfOTknVNDbDo5rvS0R/W" },
    { id: "wlgns1357", pw: "$2b$12$Kcpy.PZu25uVfALv3/P7Muglgo0j5OOZ03j7fkLVpBDYxbjpIjYYK" },
  ];
  const user = userList.find((item) => item.id === userId);
  return user?.pw;
}
