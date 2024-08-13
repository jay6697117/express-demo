import express from 'express';
const router = express.Router();

// 用于测试的数据
const userList = [
  {
    id: 1,
    name: '张三'
  },
  {
    id: 2,
    name: '李四'
  },
  {
    id: 3,
    name: '王五'
  }
];

router.get('/users', (req, res) => {
  res.json(userList);
});

router.get('/users/:id', (req, res) => {
  const { params } = req;
  console.log('params :>> ', params);
  //默认user
  let user = {
    id: params?.id,
    name: '默认人'
  };
  // 根据用户 id 查找用户信息
  const findUser = userList.find(item => item.id === Number(req.params.id));
  findUser && (user = findUser);
  res.json(user);
});

router.post('/users', (req, res) => {
  // 创建新用户
  const user = {
    id: userList.length + 1,
    name: req.body.name // 从请求体中获取用户名
  };
  userList.push(user);
  console.log('userList:', userList);
  res.json(user);
});

router.put('/users/:id', (req, res) => {
  // 根据用户 id 查找用户信息
  const user = userList.find(item => item.id === Number(req.params.id));
  console.log('put req.body :>> ', req.body);
  console.log('put user :>> ', user);
  // 更新用户名称
  user.name = req.body.name; // 从请求体中获取新的用户名
  console.log('userList:', userList);
  res.json(user);
});

router.delete('/users/:id', (req, res) => {
  // 查找要删除的用户在列表中的索引位置
  const index = userList.findIndex(item => item.id === Number(req.params.id));
  console.log('index :>> ', index);
  if(index=== -1){
    console.log('userList 1:', userList);
    return res.json({
      message: '没有找到删除项'
    });
  }
  // 获取要删除的用户信息
  const delUser = userList[index];
  // 从列表中删除该用户
  userList.splice(index, 1);
  console.log('userList 2:', userList);
  res.json({
    message: '删除成功',
    data: delUser
  });
});

export default router;
