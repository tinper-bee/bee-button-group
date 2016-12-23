/**
 *
 * @title 垂直排列的按钮组
 * @description 通过`vertical`属性设置按钮组垂直排列
 *
 */

class Demo2 extends Component {
    render () {
        return (
            <ButtonGroup vertical>
                <Button colors="primary">上</Button>
                <Button colors="warning">中</Button>
                <Button colors="info">下</Button>
            </ButtonGroup>
        )
    }
}
