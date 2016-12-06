/**
 * Created by Glacier on 16/9/19.
 */
import request from '../utils/request';
import qs      from 'qs';

export async function list() {
  return request('/api/stories');
}

export async function create(params) {
  return request('/api/stories', {
    method: 'post',
    body: qs.stringify(params)
  });
}

export async function getDetail(params) {
  return request(`/api/stories/${ params.id }`);
}

export async function del(params) {
  return request(`/api/stories/${ params.id }`, {
    method: 'delete'
  });
}

