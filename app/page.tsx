import GHome from './Components/Pages/GHome';
import { asyncGetAllTodos } from './Helpers/Todo';

export const revalidate = false;
export const dynamic = 'force-dynamic';

const Page = async () => {
  try {
    const todos = await asyncGetAllTodos();
    return <GHome todos={todos} />;
  } catch (error: any) {
    throw new Error(error.messge);
  }
};

export default Page;
