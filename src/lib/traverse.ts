import BaseNode from '../nodes/base'
import ElementNode from '../nodes/element'
import NODE_TYPES from '../types/node-types'

export type Visitor = (node: BaseNode, parent: BaseNode | null) => void;

const NOOP = function () {}
const traverseByType = {
  [NODE_TYPES.TEXT]: NOOP,
  [NODE_TYPES.ELEMENT] (node: ElementNode, visitor: Visitor) {
    node.childNodes.forEach((childNode) => {
      traverse(childNode, visitor, node)
    })
  },
  [NODE_TYPES.COMMENT]: NOOP
  // [NODE_TYPES.CDATA_SECTION]: NOOP,
}

export default function traverse (
  node: BaseNode,
  visitor: Visitor,
  parent: BaseNode | null = null
) {
  visitor(node, parent)
  if (!traverseByType[node.type]) {
    throw new Error('Unexpected node.type: ' + node.type)
  }

  traverseByType[node.type](node as ElementNode, visitor)
}
