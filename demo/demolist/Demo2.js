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
                <Button size="lg" colors="primary">按钮一</Button>
                <Button size="lg" colors="warning">按钮二</Button>
                <Button size="lg" colors="info">按钮三</Button>
            </ButtonGroup>
        )
    }
}
