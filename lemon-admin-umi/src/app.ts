/*
 * @Author: L.柠
 * @Date: 2022-02-28 14:26:19
 */
  export async function getInitialState():Promise<{}> {
      //const data = await fetchXXX();
    const data = ['HOME']
      return data;
    }

  export const layout = {
    logout: () => {
      alert('退出登录成功');
    },
  };