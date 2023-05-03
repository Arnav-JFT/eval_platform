import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { User } from '../users/users.entity';

export enum Action {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}

export type subjects = InferSubjects<typeof User> | 'all';
export type AppAbility = Ability<[Action, subjects]>;

@Injectable()
export class AbilityFactory {
  defineAbility(user: User) {
    const { can, cannot, build } = new AbilityBuilder(
      Ability as AbilityClass<AppAbility>,
    );
    if (user.isAdmin) {
      can(Action.Manage, 'all');
    } else {
      can(Action.Read, 'all');
      cannot(Action.Create, User).because('you are not an admin!!');
    }
    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<subjects>,
    });
  }
}
