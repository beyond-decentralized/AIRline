import { BaseTaskDao } from "../generated/baseDaos";
export declare class TaskDao extends BaseTaskDao {
    findById(taskUuId: string): Promise<import("../ddl/Task").Task[]>;
}
//# sourceMappingURL=TaskDao.d.ts.map